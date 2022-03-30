export default function Header(){
  return(
    <header className="centralize-text">
      <div className="content row justify-space-between centralize-item">
        <h3 className="margin-t-2">FarmVest</h3>
        <ul className="row links gap-1 margin-t-1 hide-on-md-and-down">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Features</li>
          <li className="">How it works</li>
        </ul>
        <ul className="row margin-t-1">
          <li className=""><button className="btn btn-black-outlined margin-r-1">Sign in</button></li>
          <li className=""><button className="btn bg-light-secondary text-white ">Get Started</button></li>
        </ul>
      </div>
    </header>
  )
}