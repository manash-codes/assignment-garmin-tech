import User from '@/types/User'

interface ListProps {
    users: User[] | undefined | null
}

const List = ({ users }: ListProps) => {

    if (users === null) {
        return (
            <div className="container mx-auto w-1/2">
                <p>No users found</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto w-1/2">
            {users && (
                <div className="grid grid-cols-3 gap-4">
                    {users.map((user: User) => (
                        <div
                            key={user.first_name + user.contact_number}
                            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-[#D7D7EA]">
                            <p className="text-xl font-bold">{user.first_name + " " + user.last_name}</p>
                            <p className="text-sm font-medium">{user.city}</p>
                            <p className="text-sm font-medium">{user.contact_number}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default List