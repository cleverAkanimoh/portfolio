import loadingGif from '../assets/images/mona-loading-dark.gif'

export default () => (
  <div className="loading-div-style">
    <img src={loadingGif} alt="loading..." className='loading-img-style' />
    <h2 className="loading-h2-style">loading projects...</h2>
  </div>
)