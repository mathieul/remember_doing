defmodule RememberDoingWeb.Router do
  use RememberDoingWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", RememberDoingWeb do
    pipe_through :browser

    get "/", HomeController, :index
  end

  scope "/" do
    pipe_through :api

    forward("/api", Absinthe.Plug, schema: RememberDoingWeb.GraphQL.Schema)

    forward(
      "/graphiql",
      Absinthe.Plug.GraphiQL,
      schema: RememberDoingWeb.GraphQL.Schema,
      interface: :playground
    )
  end
end
