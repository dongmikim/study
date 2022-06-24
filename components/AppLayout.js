import propTypes from "prop-types";
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">nodebird</Link>
        <Link href="/profile">profile</Link>
        <Link href="/signup">signup</Link>
      </div>
      {children}
    </div>
  )
}

AppLayout.propTypes = {
  children: propTypes.node.isRequired
}

export default AppLayout;