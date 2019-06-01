defmodule RememberDoingWeb.GraphQL.Schema do
  use Absinthe.Schema

  alias RememberDoingWeb.GraphQL.Resolvers

  query do
    @desc "Hello World"
    field(:hello_world, :hello) do
      resolve(&Resolvers.DeleteMe.hello_world/3)
    end

    @desc "Return the current user"
    field :me, :user do
      resolve(fn _, _, _ ->
        {:ok, %{id: 12, email: "john.doe@example.com", name: "John Doe"}}
      end)
    end
  end

  object :hello do
    field(:id, non_null(:id))
    field(:world, :string)
  end

  object :user do
    field(:id, non_null(:id))
    field :email, non_null(:string)
    field :name, :string
  end
end
