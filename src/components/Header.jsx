import globeLogo from "../assets/Globe.png"

export default function Header() {
  return (
    <header className="header">
      <img
        src={globeLogo}
        className="header-logo"
        alt="Globe logo"
      />
      <h1 className="header-title">my travel journal.</h1>
    </header>
  )
}