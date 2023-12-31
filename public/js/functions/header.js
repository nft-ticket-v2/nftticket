window.addEventListener('load', () => {
  const allHeaderConnectWalletPopUpBackgroundLayer = document.querySelector('.all-header-connect-wallet-pop-up-background-layer');

  const allHeaderMainSearchDropdownWrapper = document.querySelector('.all-header-main-search-dropdown-wrapper')
  const allHeaderMainSearchDropdownItems = document.querySelectorAll('.each-header-main-search-dropdown-item')
  const allHeaderMainSearchField = document.getElementById('all-header-main-search-field');

  const allHeaderDateSearchWrapper = document.querySelector('.all-header-date-search-wrapper')
  const allHeaderDateSearchText = document.querySelector('.all-header-date-search-text')
  const allHeaderDateSearchDropdownWrapper = document.querySelector('.all-header-date-search-dropdown-wrapper')
  const allHeaderDateSearchInput = document.getElementById('all-header-date-search-input');

  allHeaderDateSearchWrapper.addEventListener('mouseover', () => allHeaderDateSearchDropdownWrapper.style.display = 'flex');
  allHeaderDateSearchWrapper.addEventListener('mouseout', () => allHeaderDateSearchDropdownWrapper.style.display = 'none');

  const allHeaderPlaceSearchWrapper = document.querySelector('.all-header-place-search-wrapper')
  const allHeaderPlaceSearchText = document.querySelector('.all-header-place-search-text')
  const allHeaderPlaceSearchDropdownWrapper = document.querySelector('.all-header-place-search-dropdown-wrapper')
  const allHeaderPlaceSearchInput = document.getElementById('all-header-place-search-input');

  allHeaderPlaceSearchWrapper.addEventListener('mouseover', () => allHeaderPlaceSearchDropdownWrapper.style.display = 'flex');
  allHeaderPlaceSearchWrapper.addEventListener('mouseout', () => allHeaderPlaceSearchDropdownWrapper.style.display = 'none');

  const allHeaderMainSearchDropdownNoResultItem = document.getElementById('all-header-main-search-dropdown-no-result-item');
  allHeaderMainSearchField.addEventListener('input', () => {
    document.querySelector('.each-selected-header-main-search-dropdown-item')?.classList.remove('each-selected-header-main-search-dropdown-item');
    selectedIndexOfHeaderMainSearchDropdownItems = -1;
    if (allHeaderMainSearchField.value.length > 0) {
      allHeaderMainSearchDropdownNoResultItem.style.display = 'none';
      allHeaderMainSearchDropdownWrapper.style.display = 'flex';

      let noResult = true;
      allHeaderMainSearchDropdownItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(allHeaderMainSearchField.value.toLowerCase())) {
          noResult = false;
          item.style.display = 'flex';
        }
        else
          item.style.display = 'none';
      });

      if (noResult)
        allHeaderMainSearchDropdownNoResultItem.style.display = 'flex';
    }
    else {
      allHeaderMainSearchDropdownWrapper.style.display = 'none';
    }
  });

  document.querySelectorAll('.each-header-main-search-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      allHeaderMainSearchDropdownWrapper.style.display = 'none';
      allHeaderMainSearchField.value = item.textContent;
    })
  });

  document.querySelectorAll('.each-header-date-search-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      allHeaderDateSearchDropdownWrapper.style.display = 'none';
      allHeaderDateSearchInput.value = item.textContent;
      allHeaderDateSearchText.textContent = item.textContent;
    })
  });

  document.querySelectorAll('.each-header-place-search-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      allHeaderPlaceSearchDropdownWrapper.style.display = 'none';
      allHeaderPlaceSearchInput.value = item.textContent;
      allHeaderPlaceSearchText.textContent = item.textContent;
    })
  });

  const allFooterBottomLeftInputField = document.querySelector('.all-footer-bottom-left-input-field');

  addEventListener('click', event => {
    document.querySelector('.each-selected-header-main-search-dropdown-item')?.classList.remove('each-selected-header-main-search-dropdown-item');
    selectedIndexOfHeaderMainSearchDropdownItems = -1;

    if (event.target.closest('#all-header-change-currency-button')) {
      console.log('change currency button');
    }

    if (event.target.closest('#all-header-connect-wallet-button')) {
      allHeaderConnectWalletPopUpBackgroundLayer.style.display = 'flex';
    }

    if (event.target.closest('.all-header-connect-wallet-pop-up-close-button') || (event.target.closest('.all-header-connect-wallet-pop-up-background-layer') && !event.target.closest('.all-header-connect-wallet-pop-up-wrapper'))) {
      allHeaderConnectWalletPopUpBackgroundLayer.style.display = 'none';
    }

    if (!event.target.closest('.all-header-main-search-wrapper')) {
      allHeaderMainSearchDropdownWrapper.style.display = 'none';
    }

    if (event.target.closest('.all-header-main-search-field')) {
      allHeaderMainSearchField.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (event.target.closest('.all-header-main-search-icon')) {
      console.log('search icon', allHeaderMainSearchField.value);
    }

    if (event.target.closest('.all-footer-bottom-left-input-button')) {
      console.log('mail to link', allFooterBottomLeftInputField.value);
    }
  });

  let selectedIndexOfHeaderMainSearchDropdownItems = -1;
  addEventListener('keydown', event => {
    const allHeaderMainSearchDropdownItems = document.querySelectorAll('.each-header-main-search-dropdown-item[style="display: flex;"]')

    if (event.target.closest('.all-header-main-search-field') && allHeaderMainSearchDropdownItems.length) {
      if (event.key === 'ArrowDown') {
        document.querySelector('.each-selected-header-main-search-dropdown-item')?.classList.remove('each-selected-header-main-search-dropdown-item');
        selectedIndexOfHeaderMainSearchDropdownItems = selectedIndexOfHeaderMainSearchDropdownItems < allHeaderMainSearchDropdownItems.length - 1 ? selectedIndexOfHeaderMainSearchDropdownItems + 1 : 0;
        allHeaderMainSearchDropdownItems[selectedIndexOfHeaderMainSearchDropdownItems].classList.add('each-selected-header-main-search-dropdown-item');
      }

      if (event.key === 'ArrowUp') {
        document.querySelector('.each-selected-header-main-search-dropdown-item')?.classList.remove('each-selected-header-main-search-dropdown-item');
        selectedIndexOfHeaderMainSearchDropdownItems = selectedIndexOfHeaderMainSearchDropdownItems > 0 ? selectedIndexOfHeaderMainSearchDropdownItems - 1 : allHeaderMainSearchDropdownItems.length - 1;
        allHeaderMainSearchDropdownItems[selectedIndexOfHeaderMainSearchDropdownItems].classList.add('each-selected-header-main-search-dropdown-item');
      }

      if (event.key === 'Enter') {
        if (selectedIndexOfHeaderMainSearchDropdownItems !== -1) {
          allHeaderMainSearchField.value = allHeaderMainSearchDropdownItems[selectedIndexOfHeaderMainSearchDropdownItems].textContent;
          allHeaderMainSearchDropdownWrapper.style.display = 'none';
          document.getElementById('all-header-main-search-button').click();
        }
      }
    }
  });
});