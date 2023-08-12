import { useQuery } from "@apollo/client";
import ClientsRow from "./ClientsRow";
import { GET_CLIENTS } from "../queries/clientsQueries";
import Spinner from "./Spinner";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner/>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientsRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
