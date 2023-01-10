export const MobileNav = ({children}) => (

    <div class="mobile-nav">
          <input id="mobile-nav__toggle" type="checkbox" />
          <label class="mobile-nav__btn" for="mobile-nav__toggle">
            <span></span>
          </label>
          <ul class="mobile-nav__box">
            {children}
          </ul>
        </div>
  )