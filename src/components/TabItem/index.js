import './index.css'

const TabItem = props => {
  const {eachTab, selectTab, isSelectedTab} = props
  const {tabId, displayText} = eachTab

  const clickTab = () => {
    selectTab(tabId)
  }

  const activeTab = isSelectedTab ? 'selected_button' : ''

  return (
    <li>
      <button
        type="button"
        className={`button ${activeTab}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
