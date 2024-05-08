import React from 'react';
import PropTypes from 'prop-types';


class Landmark extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            <div className='flex items-center gap-x-2 p-3 border-2 border-gray-600 rounded-lg'>
                { ( this.props.type == "company" ) && <span className='material-symbols-outlined text-4xl text-gray-400'>
                    business_center
                </span> }
                
                { ( this.props.type == "location" ) && <span className='material-symbols-outlined text-4xl text-gray-400'>
                    pin_drop
                </span> }
                
                { ( this.props.type == "gists" ) && <span className='material-symbols-outlined text-4xl text-gray-400'>
                    campaign
                </span> }
                
                { ( this.props.type == "repos" ) && <span className='material-symbols-outlined text-4xl text-gray-400'>
                    cable
                </span> }
                
                { ( this.props.type == "followers" ) && <span className='material-symbols-outlined text-4xl text-gray-400'>
                    diversity_1
                </span> }
                
                { ( this.props.type == "following" ) && <span className='material-symbols-outlined text-4xl text-gray-400'>
                    loyalty
                </span> }


                <div className='flex flex-col'>

                    { ( this.props.type == "company" ) && <span className='uppercase text-xs text-gray-500 font-semibold'>
                        working at
                    </span> }
                    
                    { ( this.props.type == "location" ) && <span className='uppercase text-xs text-gray-500 font-semibold'>
                        located in
                    </span> }
                    
                    { ( this.props.type == "gists" ) && <span className='uppercase text-xs text-gray-500 font-semibold'>
                        own gists
                    </span> }
                    
                    { ( this.props.type == "repos" ) && <span className='uppercase text-xs text-gray-500 font-semibold'>
                        owned repo
                    </span> }
                    
                    { ( this.props.type == "followers" ) && <span className='uppercase text-xs text-gray-500 font-semibold'>
                        followed by
                    </span> }
                    
                    { ( this.props.type == "following" ) && <span className='uppercase text-xs text-gray-500 font-semibold'>
                        following
                    </span> }

                    <span className='capitalize text-lg font-medium'>
                        {
                            this.props.value
                        }
                    </span>
                </div>
            </div>
        )
    }
}


// create default values for component props
Landmark.defaultProps = {
    type: "company",
    value: "LinkedIn"
}


// define prop types for component props
Landmark.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}


export default Landmark;