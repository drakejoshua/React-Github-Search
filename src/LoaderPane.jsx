import React from 'react';
import InfoElement from './Info';
import PropTypes from 'prop-types';

class LoaderPane extends React.Component {
    constructor( props ) {
        super( props );
    }

    // use "should-component-update" to decide on component re-render based
    // on value received from props( if values are the same or not )
    shouldComponentUpdate( nextProps ) {
        if ( ( this.props.displayState == "loading" && nextProps.displayState == "loading" ) )
        {
            return false;
        }
        else if ( ( this.props.displayState == "invalid" && nextProps.displayState == "invalid" ) ) 
        {
            return false;
        } 
        else if ( nextProps.displayState == "error" && ( this.props.errorCode == nextProps.errorCode ) )
        {
            return false;
        }
        else if ( nextProps.displayState == "loaded" && ( this.props.data.id == nextProps.data.id ) )
        {
            return false;
        }
        else 
        {
            return true;
        }
    }

    render() {
        return (
            <div id="loader" className='w-10/12 md:w-4/5 mx-auto'>

                {/* default-pane which prompts user to enter username */}
                { ( this.props.displayState == "default" ) && <div id="default-pane" className='loader-pane-child'>

                    <span className="material-symbols-outlined loader-icon">person_search</span>

                    <span className='loader-text'>
                        enter a username to see profile info
                    </span>
                </div> }
                
                {/* invalid-user-pane which tells user that the username entered is invalid */}
                { ( this.props.displayState == "invalid" ) && <div id="invalid-user-pane" className='loader-pane-child'>
                    <span className="material-symbols-outlined  loader-icon">person_off</span>

                    <span className='loader-text'>
                        the username entered is invalid and profile not found on github
                    </span>
                </div> }
                
                {/* loading-pane which is used to show API data loading/fetching */}
                { ( this.props.displayState == "loading" ) && <div id="loading-pane" className='loader-pane-child'>
                    <span className="material-symbols-outlined loader-icon">sync</span>

                    <span className='loader-text'>
                        fetching user data
                    </span>
                </div> }
                
                {/* error-pane which is used to show API data loading/fetching */}
                { ( this.props.displayState == "error" ) && <div id="error-pane" className='loader-pane-child'>
                    <span className="material-symbols-outlined loader-icon">error</span>

                    <span className='loader-text'>
                        error encountered while fetching user data( trying checking your internet connection or search error code ). HTTP Error Code: 
                        { this.props.errorCode }
                    </span>
                </div> }

                {/* info component */}
                {/* used to display loaded user info which are passed as props */}
                { ( this.props.displayState == "loaded" ) && <InfoElement data={ this.props.data } /> }
            </div>
        )
    }
}

// create default values for component props
LoaderPane.defaultProps = {
    displayState: "default",
    data: {},
    errorCode: 300
}


// define prop types for component props
LoaderPane.propTypes = {
    displayState: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    errorCode: PropTypes.number.isRequired
}

export default LoaderPane;