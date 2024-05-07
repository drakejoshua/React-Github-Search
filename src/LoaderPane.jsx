import React from 'react';
import InfoElement from './Info';

class LoaderPane extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <>
                <div id="loader" className='w-4/5 mx-auto'>

                    {/* default-pane which prompts user to enter username */}
                    <div id="default-pane" className='loader-pane-child'>

                        <span className="material-symbols-outlined text-9xl">person_search</span>

                        <span className='capitalize text-lg'>
                            enter a username to see profile info
                        </span>
                    </div>
                    
                    {/* invalid-user-pane which tells user that the username entered is invalid */}
                    <div id="invalid-user-pane" className='loader-pane-child'>
                        <span className="material-symbols-outlined  text-9xl">person_off</span>

                        <span className='capitalize text-lg'>
                            the username entered is invalid and profile not found on github
                        </span>
                    </div>
                    
                    {/* loading-pane which is used to show API data loading/fetching */}
                    <div id="loading-pane" className='loader-pane-child'>
                        <span className="material-symbols-outlined text-9xl">sync</span>

                        <span className='capitalize text-lg'>
                            fetching user data
                        </span>
                    </div>
                    
                    {/* error-pane which is used to show API data loading/fetching */}
                    <div id="error-pane" className='loader-pane-child'>
                        <span className="material-symbols-outlined text-9xl">error</span>

                        <span className='capitalize text-lg'>
                            network error encountered while fetching user data. Error Code: 404
                        </span>
                    </div>

                    {/* info component */}
                    {/* used to display loaded user info which are passed as props */}
                    <InfoElement/>
                </div>
            </>
        )
    }
}

export default LoaderPane;