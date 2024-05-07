import React from 'react';
import Landmark from "./Landmark";

class InfoElement extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            // component container
            <div className='bg-gray-900 px-12 py-14 mt-10 rounded-xl border-2 border-gray-200'>

                {/* user info section */}
                <div className='flex gap-x-6 items-center mb-8'>

                    {/* user image/avatar */}
                    <img src=
                        "https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4="
                    alt="" className='h-32 w-32 object-cover rounded-full'/>

                    {/* user's name and biodata */}
                    <div>
                        <div className='text-gray-400 text-sm'>

                            {/* username */}
                            <span className='mr-2 inline-block'>
                                @drakejoshua
                            </span>

                            {/* github user id */}
                            <span>
                                #2535366773
                            </span>
                        </div>

                        {/* user profile name */}
                        <h2 className='text-3xl font-medium capitalize mt-1 mb-2'>
                            Joshua Mabawonku
                        </h2>

                        {/* user bio */}
                        <p className='text-gray-300 lowercase'>
                            Just joshua doing things here and there
                        </p>
                    </div>
                </div>
                
                {/* user landmarks and achievements */}
                <div className='grid grid-cols-3 gap-x-8 gap-y-5 justify-start'>

                    <Landmark type="location" value="lagos"/>
                    <Landmark type="location" value="lagos"/>
                    <Landmark type="location" value="lagos"/>
                    <Landmark type="location" value="lagos"/>
                    <Landmark type="location" value="lagos"/>
                    <Landmark type="location" value="lagos"/>
                </div>

                {/* user date-joined and CTA */}
                <div className='mt-9'>

                    <p className='text-gray-500 font-medium'>
                        Joined Github: 2020/10/03
                    </p>

                    <a href="http://w3schools.com" target="_blank" rel="noopener noreferrer" 
                        className='block text-center rounded-lg py-2 bg-blue-600 capitalize mt-3'>
                        visit user profile on github
                    </a>
                </div>

            </div>
        );
    }
}


export default InfoElement;