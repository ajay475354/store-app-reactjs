import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails

  return (
    <li className="app_item_container">
      <img src={imageUrl} alt={appName} className="app_image" />
      <p className="app_heading">{appName}</p>
    </li>
  )
}

export default AppItem
