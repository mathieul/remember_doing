defmodule RememberDoingWeb.GraphQL.Schema do
  use Absinthe.Schema

  alias RememberDoingWeb.GraphQL.Resolvers

  query do
    @desc "Hello World"
    field(:hello_world, :hello) do
      resolve(&Resolvers.DeleteMe.hello_world/3)
    end
  end

  object :hello do
    field(:id, non_null(:id))
    field(:world, :string)
  end
end
