import User from '@/types/User';
import PROFILEPIC from '@/assets/profilePic.png';
import LOCATION from '@/assets/location.svg';
import PHONE from '@/assets/phone.svg';
import MODALPROFILEPIC from '@/assets/modalProfile.png';
import NOFILEFOUND from '@/assets/noFileFound.png';
import Modal from './Modal';

interface ListProps {
    users: User[] | undefined | null
}

const List = ({ users }: ListProps) => {
    if (users?.length === 0) {
        return (
            <div className="container mx-auto w-1/2">
                <div className="flex justify-center items-center mt-20">
                    <img className='w-fit' src={NOFILEFOUND} alt="No file found" loading='lazy' />
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto lg:w-4/6 md:w-11/12 w-4/5 mt-6">
            {users && (
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                    {users.map((user: User) => (
                        <div
                            key={user.first_name + user.contact_number}
                            className="flex flex-col justify-center md:max-lg:p-4 p-6 bg-white rounded-xl border border-[#D7D7EA] md:gap-2 gap-1">
                            <img className='h-20 w-h-20 rounded-full self-start border border-[#F3F3F3] p-2'
                                src={PROFILEPIC} alt="Profile Picture" loading='lazy' />
                            <p className="md:text-3xl text-xl font-semibold">{user.first_name + " " + user.last_name}</p>
                            <div className="flex items-center gap-2 mb-2">
                                <img src={LOCATION} alt="location" loading='lazy' />
                                <p className="text-xs text-[#425763] font-medium">{user.city}</p>
                            </div>

                            <div className='w-full h-[1px] bg-[#F3F3F3]' />

                            <div className="flex justify-between items-center mt-2  lg:flex-nowrap flex-wrap gap-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img src={PHONE} alt="location" loading='lazy' />
                                        <p className="text-sm font-semibold">{user.contact_number}</p>
                                    </div>
                                    <p className="text-xs text-[#AFAFAF] font-medium">Available on phone</p>
                                </div>
                                <Modal
                                    title='Fetch Details'
                                    description='Here are the details of following employee.'
                                    trigger={<button className='p-2 rounded-lg'>Fetch Details</button>} >
                                    <div className="font-medium text-sm">
                                        <p>Name: {user.first_name + " " + user.last_name}</p>
                                        <p>Location: {user.city}</p>
                                        <p>Contact: {user.contact_number}</p>

                                        <p className='mt-4'>Profile picture:</p>
                                    </div>
                                    <img className='max-w-full' loading='lazy'
                                        src={MODALPROFILEPIC} alt="Profile Picture" />
                                </Modal>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default List