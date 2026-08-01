import api from "@/lib/api";
import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/react-query";

import {
    Loader
} from "lucide-react";


function UsersTable() {


    const queryClient = useQueryClient();



    const usersQuery = useQuery({

        queryKey: ["admin-users"],


        queryFn: async () => {

            const response =
                await api.get("/admin/users");

            return response.data;

        }

    });




    const statusMutation = useMutation({

        mutationFn: async (userId) => {

            const response =
                await api.put(
                    `/admin/users/${userId}/status`
                );

            return response.data;

        },


        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: ["admin-users"]

            });

        }

    });




    if (usersQuery.isLoading) {

        return (

            <Loader
                className="animate-spin"
            />

        )

    }



    if (usersQuery.isError) {

        return (

            <p className="text-red-500">

                Error loading users

            </p>

        )

    }




    const users =
        usersQuery.data?.users || [];




    return (

        <div
            className="
border
rounded-lg
p-4
"
        >


            <h2
                className="
text-xl
font-semibold
mb-4
"
            >

                Manage Users

            </h2>




            <div
                className="
overflow-x-auto
"
            >


                <table
                    className="
w-full
"
                >


                    <thead>

                        <tr
                            className="
border-b
"
                        >


                            <th className="text-left p-2">
                                Name
                            </th>


                            <th className="text-left p-2">
                                Email
                            </th>


                            <th className="text-left p-2">
                                Role
                            </th>


                            <th className="text-left p-2">
                                Action
                            </th>


                        </tr>


                    </thead>




                    <tbody>


                        {

                            users.map((user) => (


                                <tr
                                    key={user._id}
                                    className="border-b"
                                >


                                    <td className="p-2">
                                        {user.name}
                                    </td>


                                    <td className="p-2">
                                        {user.email}
                                    </td>


                                    <td className="p-2">
                                        {user.role}
                                    </td>



                                    <td className="p-2">


                                        <button

                                            className="
px-3
py-1
rounded
bg-primary
text-white
"

                                            onClick={() => statusMutation.mutate(user._id)}

                                        >

                                            Change Status

                                        </button>


                                    </td>



                                </tr>


                            ))


                        }



                    </tbody>



                </table>



            </div>



        </div>

    )

}


export default UsersTable;