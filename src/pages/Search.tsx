import List from "@/components/List";
import Navbar from "@/components/Navbar";
import Users from '@/constant/user_list.json';
import User from "@/types/User";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
    // const urlParams = new URLSearchParams(window.location.search);
    // const params = Object.fromEntries(urlParams.entries()) as { [key: string]: string };
    const [searchParams] = useSearchParams();
    const [users, setUsers] = useState<User[] | null | undefined>();

    useEffect(() => {
        const getUsers = () => {
            const query = searchParams.get('query') || '';
            return Users.filter((user) =>
                (user.first_name + " " + user.last_name).toLowerCase().includes(query.toLowerCase())
            );
        }
        setUsers(getUsers())
    }, [searchParams])

    return (
        <>
            <Navbar />
            <List users={users} />
        </>
    )
}

export default SearchPage