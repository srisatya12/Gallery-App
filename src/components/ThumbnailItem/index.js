// Write your code here.
import './index.css'
const ThumbnailItem = props => {
  const {id, src, alt, enlarge, isActive} = props
  const activeOpacity = isActive ? '' : 'btn-opacity'
  const onClickEnlarge = () => {
    enlarge(id)
  }
  return (
    <li>
      <button onClick={onClickEnlarge}>
        <img src={src} alt={alt} className={activeOpacity} />
      </button>
    </li>
  )
}
export default ThumbnailItem
