defmodule RememberDoingWeb.GraphQL.Resolvers.DeleteMe do
  def hello_world(_, _, _) do
    {:ok, %{id: 42, world: "Bonjour Le Monde!"}}
  end
end
