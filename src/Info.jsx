import React from 'react';
import Landmark from "./Landmark";
import PropTypes from 'prop-types';

class InfoElement extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            // component container
            <div className='bg-gray-900 px-8 md:px-12 py-14 my-10 rounded-xl border-2 border-gray-200'>

                {/* user info section */}
                <div className='flex gap-x-6 items-center mb-8'>

                    {/* user image/avatar */}
                    <img src={`${ this.props.data.avatar_url }`}
                    alt="" className='w-20 h-20 md:h-32 md:w-32 object-cover rounded-full'/>

                    {/* user's name and biodata */}
                    <div>
                        <div className='text-gray-400 text-sm'>

                            {/* username */}
                            <span className='mr-2 inline-block'>
                                {
                                    `@${this.props.data.login}`
                                }
                            </span>

                            {/* github user id */}
                            <span>
                                {
                                    `#${this.props.data.id}`
                                }
                            </span>
                        </div>

                        {/* user profile name */}
                        <h2 className='text-xl md:text-3xl font-medium capitalize mt-1 mb-2'>
                            {
                                this.props.data.name
                            }
                        </h2>

                        {/* user bio */}
                        <p className='text-sm md:text-base text-gray-300 lowercase'>
                            {
                                this.props.data.bio
                            }
                        </p>
                    </div>
                </div>
                
                {/* user landmarks and achievements */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-8 gap-y-5 justify-start'>

                    <Landmark type="company" 
                        value={ ( this.props.data.company == null ) ? "Nowhere": this.props.data.company }/>
                    <Landmark type="location" value={ this.props.data.location }/>
                    <Landmark type="gists" value={ this.props.data.public_gists }/>
                    <Landmark type="repos" value={ this.props.data.public_repos }/>
                    <Landmark type="followers" value={ this.props.data.followers }/>
                    <Landmark type="following" value={ this.props.data.following }/>
                </div>

                {/* user date-joined and CTA */}
                <div className='mt-9'>

                    <p className='text-gray-500 font-medium'>
                        Joined Github: {
                            new Date( this.props.data.created_at ).toDateString()
                        }
                    </p>

                    <a href={ this.props.data.html_url }
                        target="_blank" rel="noopener noreferrer" 
                        className='block text-center rounded-lg py-2 bg-blue-600 capitalize mt-3 btn-interaction'>
                        visit user profile on github
                    </a>
                </div>

            </div>
        );
    }
}


// define prop types for component props
InfoElement.propTypes = {
    data: PropTypes.object.isRequired
}


export default InfoElement;