import React from 'react';
import PropTypes from 'prop-types';


class Landmark extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            <div className='flex items-center gap-x-2 p-3 border-2 border-gray-600 rounded-lg hover:border-gray-400 transition duration-700'>
                { ( this.props.type == "company" ) && <span className='material-symbols-outlined landmark-icon'>
                    business_center
                </span> }
                
                { ( this.props.type == "location" ) && <span className='material-symbols-outlined landmark-icon'>
                    pin_drop
                </span> }
                
                { ( this.props.type == "gists" ) && <span className='material-symbols-outlined landmark-icon'>
                    campaign
                </span> }
                
                { ( this.props.type == "repos" ) && <span className='material-symbols-outlined landmark-icon'>
                    cable
                </span> }
                
                { ( this.props.type == "followers" ) && <span className='material-symbols-outlined landmark-icon'>
                    diversity_1
                </span> }
                
                { ( this.props.type == "following" ) && <span className='material-symbols-outlined landmark-icon'>
                    loyalty
                </span> }


                <div className='flex flex-col'>

                    { ( this.props.type == "company" ) && <span className='landmark-text'>
                        working at
                    </span> }
                    
                    { ( this.props.type == "location" ) && <span className='landmark-text'>
                        located in
                    </span> }
                    
                    { ( this.props.type == "gists" ) && <span className='landmark-text'>
                        own gists
                    </span> }
                    
                    { ( this.props.type == "repos" ) && <span className='landmark-text'>
                        owned repo
                    </span> }
                    
                    { ( this.props.type == "followers" ) && <span className='landmark-text'>
                        followed by
                    </span> }
                    
                    { ( this.props.type == "following" ) && <span className='landmark-text'>
                        following
                    </span> }

                    <span className='capitalize text-sm md:text-lg font-medium'>
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