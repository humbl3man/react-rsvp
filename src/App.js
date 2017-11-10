import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import GuestList from './GuestList';
import AddGuest from './AddGuest';
import Notification from './Notification';
import Filter from './Filter';
import Counter from './Counter';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: JSON.parse(window.localStorage.getItem('guests')) || []
  }

  saveToLocalStorage = () => {
    window.localStorage.setItem('guests', JSON.stringify(this.state.guests))
  }

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    })
  }

  getTotalGuests = () => this.state.guests.length
  
  getCountOf = (filter, reverse) => {
    
    return this.state.guests.reduce((acc, guest) => {

      const filterBy = reverse ? !guest[filter] : guest[filter]

      if (filterBy) {
        acc += 1;
      }
      return acc;
    }, 0);
  }
  getAttendingGuestsCount = () => this.getCountOf('isAttending')
  
  getNotAttendingGuestsCount = () => this.getCountOf('isAttending', true)
  
  getInvalidGuestsCount = () => this.getCountOf('isModelInvalid')

  togglePropertyAt = (property, idToChange, setValue = null) => {

    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === idToChange) {

          return {
            ...guest,
            isModelInvalid: setValue !== null && (setValue === '' || typeof setValue === 'undefined'),
            [property]: setValue !== null ? setValue : !guest[property]
          }
        }
        
        return guest;
      })
    })
  }

  toggleValidity = id => {
    this.togglePropertyAt('isModelInvalid', id)
  }

  toggleAttendingAt = id => this.togglePropertyAt('isAttending', id)

  toggleEditingAt = id => this.togglePropertyAt('isEditing', id)

  setNameAt = (text, id) => {
    this.togglePropertyAt('name', id, text)
  }

  addPendingGuest = (name) => {
    this.setState({
      pendingGuest: name
    })
  }

  clearPendingGuest = () => {
    this.setState({
      pendingGuest: ''
    })
  }

  checkIfGuestExists = (name) => {
    return this.state.guests.find((guest) => guest.name.trim().toLowerCase() === name.trim().toLowerCase()) ? true : false;
  }

  addGuestToList = (name) => {
    if (!name || typeof name !== 'string') {
      return true;
    }

    if (this.checkIfGuestExists(name)) {
      alert('This guest is already on the list.')
      return true;
    }

    this.setState({
      guests: [{
        id: this.state.guests.length ? this.state.guests.length + 1 : 1,
        name: this.state.pendingGuest,
        isAttending: false,
        isEditing: false,
        isModelInvalid: false
      }, ...this.state.guests],
      pendingGuest: ''
    })
  }

  removeGuestFromList = idToRemove => {
    this.setState({
      guests: [...this.state.guests.filter(guest => guest.id !== idToRemove)]
    });
  }

  render() {

    this.saveToLocalStorage();

    const totalGuests = this.getTotalGuests();
    const attendingGuests = this.getAttendingGuestsCount();
    const notAttendingGuests = this.getNotAttendingGuestsCount();

    return (
      <div className="app">

        <Notification isVisible={this.getInvalidGuestsCount() > 0}>
          <span>You are missing values for {this.getInvalidGuestsCount()} guest{this.getInvalidGuestsCount() > 1 ? 's' : ''}.</span>
        </Notification>


        <Header
          appName="RSVP"
          slogan="Get Together" />

        <AddGuest
          addPendingGuest={this.addPendingGuest}
          addGuestToList={this.addGuestToList}
          clearPendingGuest={this.clearPendingGuest}
          name={this.state.pendingGuest}
        />
        <div className="app-filter container mb-3">
          <div className="row">
            
            {this.state.guests.length > 0 &&
              <div className="col-sm-6"><Filter isFiltered={this.state.isFiltered} toggleFilter={this.toggleFilter} /></div>
            }

            <div className="col-sm-6" style={{marginLeft: 'auto'}}>
              <Counter totalGuests={totalGuests}
                attendingGuests={attendingGuests}
                notAttendingGuests={notAttendingGuests} />
            </div>


          </div>
        </div>

        <GuestList
          guests={this.state.guests}
          toggleAttendingAt={this.toggleAttendingAt}
          isFiltered={this.state.isFiltered}
          toggleEditingAt={this.toggleEditingAt}
          removeGuestFromList={this.removeGuestFromList}
          setNameAt={this.setNameAt}
          pendingGuest={this.state.pendingGuest}
        />

      </div>
    );
  }
}

export default App;
