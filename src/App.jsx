import React from "react";
import LoaderPane from "./LoaderPane";

class App extends React.Component {
  constructor( props ) {
    super( props );

    // initialize state
    this.state = {
      displayState: "default",
      userData: {},
      errorCode: 404,
      inputData: ""
    }

    // bind "this" to submitSearch() to avoid loss of context
    this.submitSearch = this.submitSearch.bind( this );
  }

  // handle submission from search form
  submitSearch( event ) {

    event.preventDefault();

    // check if input data/value isn't then fetch data from Github Users API
    // else alert user saying empty input value provided 
    if ( this.state.inputData != "" ) {

      this.setState(
        {
          displayState: "loading"
        }
      )

      
      // initialize fetch from github servers
      fetch(`https://api.github.com/users/${ this.state.inputData.replace( "@", "" ) }`, {
        cache: "no-cache"
      })

      .then(
        function( response ) {
      
          switch( response.status ) {

            case 200:
              return response.json();
            
            case 404:
              this.setState(
                {
                  displayState: "invalid"
                }
              )

              throw new Error("404-Error");

            default:
              this.setState(
                {
                  displayState: "error",
                  errorCode: response.status
                }
              )

              throw new Error("Other-Error");
          }
        }.bind( this )
      )
      .then(
        function( data ) {

          this.setState( 
            { 
              displayState: "loaded",
              userData: data
            } 
          )
        }.bind( this )
      )
      .catch(
        function( error ) {

          if ( error.message != "404-Error" && error.message != "Other-Error" ) {

            this.setState(
              {
                displayState: "error",
                errorCode: 400
              }
            )
          }

        }.bind( this )
      )
    }
  }

  render() {
    return ( 
      // app centered container
      <div>

        {/* page's hero section/search form */}
        <div id="hero" className="flex flex-nowrap items-center pt-24 pb-9 px-36 bg-gray-700">

          <h1 className="text-2xl font-medium mr-4 capitalize flex items-center gap-x-2">
            <svg className="inline-block w-12 h-12">
              <path className="fill-white"
              d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"/
            ></svg>

            <span className="inline-block">
              search github profile using username:
            </span>
          </h1>

          <form className="inline-flex items-center flex-grow" onSubmit={ this.submitSearch }>

            {/* search input */}
            <input type="text" id="username-input" 
              className="flex-grow text-black rounded-2xl text-sm py-2 px-4 mr-3 focus:outline-none" placeholder='Try "@drakejoshua"'
              value={ this.state.inputData } 
              onInput={ ( event ) => { this.setState( { inputData: event.target.value } ) } }
            />

            {/* search button */}
            <button id="submit-btn" className="inline-flex items-center gap-x-2 w-min rounded-2xl px-3 py-2 bg-blue-500 text-white"> 

              {/* search icon  */}
              <span className="material-symbols-outlined text-base"> search </span> 

              <span className="text-sm capitalize"> search </span>
            </button>

          </form>
        </div>

        {/* the loader component
           this component naviagates between different loading states based on the github
           api response + the username submitted through the search-form */}
        <LoaderPane displayState={ this.state.displayState } data={ this.state.userData } errorCode={ this.state.errorCode } />
      </div>
    )
  }
}

export default App;
