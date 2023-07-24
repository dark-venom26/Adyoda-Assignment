import './topbar.scss';

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbar__left">
            <div className="topbar__left__logo">EDYODA</div>
            <div className="topbar__left__menu">
                <div className="topbar__left__menu__courses">Courses <div className="topbar__left__menu__courses__chevron_down"></div></div>
                <div className="topbar__left__menu__programs">Programs <div className="topbar__left__menu__programs__chevron_down"></div></div>
            </div>
        </div>
        <div className="topbar__right">
            <div className="topbar__right__searchbar"></div>
            <div className="topbar__right__slider">
                <div className="topbar__right__slider__login">
                    Log in
                </div>
                <div className="topbar__right__slider__join">
                    join now
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar