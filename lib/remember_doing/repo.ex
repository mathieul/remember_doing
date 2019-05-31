defmodule RememberDoing.Repo do
  use Ecto.Repo,
    otp_app: :remember_doing,
    adapter: Ecto.Adapters.Postgres
end
