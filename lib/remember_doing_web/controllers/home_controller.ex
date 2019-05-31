defmodule RememberDoingWeb.HomeController do
  use RememberDoingWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
