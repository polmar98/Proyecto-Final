import React, { useEffect, useState } from "react";
import { fetchUsers } from "../Redux/Users/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../Redux/Users/usersActions";

function UserList() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.users.usersList);
  const [userBloq, setUserBloq] = useState(false);
  console.log(usuarios);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  function formatDate(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date)
      .toLocaleDateString(undefined, options)
      .replace(/\//g, "-");
  }

  function bloqueado(boolean) {
    if (!boolean) {
      return "Enabled";
    } else return "Disabled";
  }
  function rolUser(num) {
    if (num === 1) {
      return "USUARIO";
    }
    if (num === 2) {
      return "ADMIN";
    }
  }
  function bloquear(user) {
    dispatch(
      editUser(user.uid, {
        id: user.id,
        uid: user.uid,
        profile: user.profile,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        dateRecord: user.dateRecord,
        locked: true,
        // avatar: null,
        // address: null,
        // addressNumber: null,
        // postalCode: null,
        // city: null,
        // country: null,
        // phoneNumber: null,
        // dni: null,
      })
    );
  }
  function habilitar(user) {
    dispatch(
      editUser(user.uid, {
        id: user.id,
        uid: user.uid,
        profile: user.profile,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        dateRecord: user.dateRecord,
        locked: false,
        // avatar: null,
        // address: null,
        // addressNumber: null,
        // postalCode: null,
        // city: null,
        // country: null,
        // phoneNumber: null,
        // dni: null,
      })
    );
  }
  return (
    <div className="m-10">
      <div className="border rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                n°
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Create Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Enabled/Disabled{" "}
              </th>
              <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cambiar Rol
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usuarios.map((user, index) => (
              <tr key={user.id}>
                <td className="px-3 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-3 py-2 whitespace-nowrap">{user.name}</td>
                <td className="px-3 py-2 whitespace-nowrap">{user.lastName}</td>
                <td className="px-3 py-2 whitespace-nowrap">{user.email}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {formatDate(user.dateRecord)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {bloqueado(user.locked)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {rolUser(user.profile)}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {!userBloq ? (
                    <button
                      onClick={bloquear(user)}
                      className="rounded bg-red-600 text-white p-2 "
                    >
                      Disabled
                    </button>
                  ) : (
                    <button
                      onClick={habilitar(user)}
                      className="rounded bg-green-600 text-white p-2 "
                    >
                      Enabled
                    </button>
                  )}{" "}
                </td>
                <td className="px-6 py-2 whitespace-nowrap">
                  <select className="rounded   p-2">
                    {user.profile === 1 ? (
                      <>
                        <option value="1">{rolUser(user.profile)}</option>
                        <option value="2">Administrador</option>
                      </>
                    ) : (
                      <>
                        <option value="2">{rolUser(user.profile)}</option>
                        <option value="1">Usuario</option>
                      </>
                    )}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
