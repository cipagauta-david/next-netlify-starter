import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
  <div class="sticky top-0 flex justify-start flex-col">
  <h3 class="text-primary-300 text-base py-2">Company Settings</h3>
  <div
    class="text-primary-300 transition-colors"
    data-reach-tabs=""
    data-orientation="horizontal"
  >
    <div
      role="tablist"
      aria-orientation="horizontal"
      class="border-b-2 border-gray-200 bg-transparent flex overflow-x-auto overflow-y-hidden pb-3 sm:pb-0"
      data-reach-tab-list=""
    >
      <button
        aria-controls="tabs--1--panel--0"
        aria-selected="false"
        role="tab"
        tabindex="-1"
        class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
        data-reach-tab=""
        data-orientation="horizontal"
        id="tabs--1--tab--0"
        type="button"
      >
        Branches</button
      ><button
        aria-controls="tabs--1--panel--1"
        aria-selected="false"
        role="tab"
        tabindex="-1"
        class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
        data-reach-tab=""
        data-orientation="horizontal"
        id="tabs--1--tab--1"
        type="button"
      >
        Store(s)</button
      ><button
        aria-controls="tabs--1--panel--2"
        aria-selected="false"
        role="tab"
        tabindex="-1"
        class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
        data-reach-tab=""
        data-orientation="horizontal"
        id="tabs--1--tab--2"
        type="button"
      >
        Roles</button
      ><button
        aria-controls="tabs--1--panel--3"
        aria-selected="true"
        role="tab"
        tabindex="0"
        class="border-primary-300 text-black border-b-2 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
        data-reach-tab=""
        data-orientation="horizontal"
        id="tabs--1--tab--3"
        type="button"
        data-selected=""
      >
        Users
      </button>
    </div>
    <div data-reach-tab-panels="">
      <div
        aria-labelledby="tabs--1--tab--0"
        role="tabpanel"
        tabindex="-1"
        data-reach-tab-panel=""
        id="tabs--1--panel--0"
        hidden=""
      >
        <div class="space-y-4 py-4">
          <form
            id="branchFilters"
            class="ant-form ant-form-inline grid grid-cols-12 items-center gap-x-4"
          >
            <div
              class="ant-row ant-form-item col-span-12 mr-0 mb-3 md:col-span-9 md:mb-0 md:mr-4 lg:col-span-10"
              style="row-gap: 0px"
            >
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <span class="ant-input-group-wrapper ant-input-search"
                      ><span class="ant-input-wrapper ant-input-group"
                        ><span class="ant-input-affix-wrapper"
                          ><input
                            placeholder="Search..."
                            id="branchFilters_search"
                            class="ant-input"
                            type="text"
                            value="" /><span class="ant-input-suffix"
                            ><span
                              role="button"
                              aria-label="close-circle"
                              tabindex="-1"
                              class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="close-circle"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                ></path></svg></span></span></span
                        ><span class="ant-input-group-addon"
                          ><button
                            type="button"
                            class="ant-btn ant-btn-icon-only ant-input-search-button"
                          >
                            <span
                              role="img"
                              aria-label="search"
                              class="anticon anticon-search"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="search"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                ></path></svg
                            ></span></button></span></span
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3 lg:col-span-2">
              <button
                id=""
                type="button"
                class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Add new branch
              </button>
            </div>
          </form>
          <div class="ant-table-wrapper">
            <div class="ant-spin-nested-loading">
              <div class="ant-spin-container">
                <div class="ant-table ant-table-scroll-horizontal">
                  <div class="ant-table-container">
                    <div
                      class="ant-table-content"
                      style="overflow: auto hidden"
                    >
                      <table
                        style="
                          width: 800px;
                          min-width: 100%;
                          table-layout: auto;
                        "
                      >
                        <colgroup></colgroup>
                        <thead class="ant-table-thead">
                          <tr>
                            <th class="ant-table-cell w-40">Branch name</th>
                            <th class="ant-table-cell w-40">City</th>
                            <th class="ant-table-cell w-40">Date/time</th>
                            <th class="ant-table-cell w-40">Active users</th>
                            <th class="ant-table-cell w-40">Actions</th>
                          </tr>
                        </thead>
                        <tbody class="ant-table-tbody">
                          <tr
                            aria-hidden="true"
                            class="ant-table-measure-row"
                            style="height: 0px; font-size: 0px"
                          >
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="92058576-7472-43be-bac3-10243c0a5117"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Neuville</td>
                            <td class="ant-table-cell w-40">Phoenix</td>
                            <td class="ant-table-cell w-40">
                              05/16/2023, 3:30 pm
                            </td>
                            <td class="ant-table-cell w-40">5</td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate Branch"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="submit"
                                    aria-label="Edit branch"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="d4273752-5552-4566-94c8-0c510ca2b43c"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Neuville</td>
                            <td class="ant-table-cell w-40">Phoenix</td>
                            <td class="ant-table-cell w-40">
                              05/18/2023, 4:20 pm
                            </td>
                            <td class="ant-table-cell w-40">0</td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate Branch"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="submit"
                                    aria-label="Edit branch"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <ul
                  class="ant-pagination ant-table-pagination ant-table-pagination-right"
                  unselectable="unselectable"
                >
                  <li class="ant-pagination-total-text">Total records 2</li>
                  <li
                    title="Previous Page"
                    class="ant-pagination-prev ant-pagination-disabled"
                    aria-disabled="true"
                  >
                    <button
                      class="ant-pagination-item-link"
                      type="button"
                      tabindex="-1"
                      disabled=""
                    >
                      <span
                        role="img"
                        aria-label="left"
                        class="anticon anticon-left"
                        ><svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="left"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                          ></path></svg
                      ></span>
                    </button>
                  </li>
                  <li
                    title="1"
                    class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                    tabindex="0"
                  >
                    <a rel="nofollow">1</a>
                  </li>
                  <li
                    title="Next Page"
                    class="ant-pagination-next ant-pagination-disabled"
                    aria-disabled="true"
                  >
                    <button
                      class="ant-pagination-item-link"
                      type="button"
                      tabindex="-1"
                      disabled=""
                    >
                      <span
                        role="img"
                        aria-label="right"
                        class="anticon anticon-right"
                        ><svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                          ></path></svg
                      ></span>
                    </button>
                  </li>
                  <li class="ant-pagination-options">
                    <div
                      class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                      aria-label="Page Size"
                    >
                      <div class="ant-select-selector">
                        <span class="ant-select-selection-search"
                          ><input
                            autocomplete="off"
                            type="search"
                            class="ant-select-selection-search-input"
                            role="combobox"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            aria-owns="rc_select_12_list"
                            aria-autocomplete="list"
                            aria-controls="rc_select_12_list"
                            aria-activedescendant="rc_select_12_list_0"
                            aria-label="Page Size"
                            readonly=""
                            unselectable="on"
                            value=""
                            id="rc_select_12"
                            style="opacity: 0" /></span
                        ><span
                          class="ant-select-selection-item"
                          title="10 / page"
                          >10 / page</span
                        >
                      </div>
                      <span
                        class="ant-select-arrow"
                        unselectable="on"
                        aria-hidden="true"
                        style="user-select: none"
                        ><span
                          role="img"
                          aria-label="down"
                          class="anticon anticon-down ant-select-suffix"
                          ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                            ></path></svg></span
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-labelledby="tabs--1--tab--1"
        role="tabpanel"
        tabindex="-1"
        data-reach-tab-panel=""
        id="tabs--1--panel--1"
        hidden=""
      >
        <div class="space-y-4 py-4">
          <form
            id="officeFilters"
            class="ant-form ant-form-inline grid grid-cols-12 items-center gap-x-4"
          >
            <div
              class="ant-row ant-form-item col-span-12 mr-0 mb-3 md:col-span-9 md:mr-4 md:mb-0 lg:col-span-10"
              style="row-gap: 0px"
            >
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <span class="ant-input-group-wrapper ant-input-search"
                      ><span class="ant-input-wrapper ant-input-group"
                        ><span class="ant-input-affix-wrapper"
                          ><input
                            placeholder="Search..."
                            id="officeFilters_search"
                            class="ant-input"
                            type="text"
                            value="" /><span class="ant-input-suffix"
                            ><span
                              role="button"
                              aria-label="close-circle"
                              tabindex="-1"
                              class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="close-circle"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                ></path></svg></span></span></span
                        ><span class="ant-input-group-addon"
                          ><button
                            type="button"
                            class="ant-btn ant-btn-icon-only ant-input-search-button"
                          >
                            <span
                              role="img"
                              aria-label="search"
                              class="anticon anticon-search"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="search"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                ></path></svg
                            ></span></button></span></span
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3 lg:col-span-2">
              <button
                id=""
                type="button"
                class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Add new Store(s)
              </button>
            </div>
          </form>
          <div class="ant-table-wrapper">
            <div class="ant-spin-nested-loading">
              <div class="ant-spin-container">
                <div class="ant-table ant-table-scroll-horizontal">
                  <div class="ant-table-container">
                    <div
                      class="ant-table-content"
                      style="overflow: auto hidden"
                    >
                      <table
                        style="
                          width: 800px;
                          min-width: 100%;
                          table-layout: auto;
                        "
                      >
                        <colgroup></colgroup>
                        <thead class="ant-table-thead">
                          <tr>
                            <th class="ant-table-cell w-40">Branch</th>
                            <th class="ant-table-cell w-40">Store(s) name</th>
                            <th class="ant-table-cell w-40">City</th>
                            <th class="ant-table-cell w-40">Date/time</th>
                            <th class="ant-table-cell w-40">Active users</th>
                            <th class="ant-table-cell w-40">Actions</th>
                          </tr>
                        </thead>
                        <tbody class="ant-table-tbody">
                          <tr
                            aria-hidden="true"
                            class="ant-table-measure-row"
                            style="height: 0px; font-size: 0px"
                          >
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="6910ff7b-9f79-46b0-8294-525673a6cef4"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Neuville</td>
                            <td class="ant-table-cell w-40">
                              Neuville Store 2
                            </td>
                            <td class="ant-table-cell w-40">Phoenix</td>
                            <td class="ant-table-cell w-40">
                              05/18/2023, 4:20 pm
                            </td>
                            <td class="ant-table-cell w-40">0</td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate Store(s)"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="submit"
                                    aria-label="Edit office"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button></span
                                ><span class="ml-1"
                                  ><button
                                    type="submit"
                                    aria-label="Subscriptions"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path
                                        d="M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
                                      ></path>
                                    </svg></button></span
                                ><span class="ml-1"
                                  ><button
                                    type="submit"
                                    aria-label="Change the office"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="08fb00ee-0b15-49cf-8c6a-ddd8b4d59223"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Neuville</td>
                            <td class="ant-table-cell w-40">
                              Neuville Store 1
                            </td>
                            <td class="ant-table-cell w-40">Phoenix</td>
                            <td class="ant-table-cell w-40">
                              05/16/2023, 3:30 pm
                            </td>
                            <td class="ant-table-cell w-40">5</td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate Store(s)"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="submit"
                                    aria-label="Edit office"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button></span
                                ><span class="ml-1"
                                  ><button
                                    type="submit"
                                    aria-label="Subscriptions"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      ></path>
                                      <path
                                        d="M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
                                      ></path>
                                    </svg></button></span
                                ><span class="ml-1"
                                  ><button
                                    type="submit"
                                    aria-label="Change the office"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <ul
                  class="ant-pagination ant-table-pagination ant-table-pagination-right"
                  unselectable="unselectable"
                >
                  <li class="ant-pagination-total-text">Total records 2</li>
                  <li
                    title="Previous Page"
                    class="ant-pagination-prev ant-pagination-disabled"
                    aria-disabled="true"
                  >
                    <button
                      class="ant-pagination-item-link"
                      type="button"
                      tabindex="-1"
                      disabled=""
                    >
                      <span
                        role="img"
                        aria-label="left"
                        class="anticon anticon-left"
                        ><svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="left"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                          ></path></svg
                      ></span>
                    </button>
                  </li>
                  <li
                    title="1"
                    class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                    tabindex="0"
                  >
                    <a rel="nofollow">1</a>
                  </li>
                  <li
                    title="Next Page"
                    class="ant-pagination-next ant-pagination-disabled"
                    aria-disabled="true"
                  >
                    <button
                      class="ant-pagination-item-link"
                      type="button"
                      tabindex="-1"
                      disabled=""
                    >
                      <span
                        role="img"
                        aria-label="right"
                        class="anticon anticon-right"
                        ><svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                          ></path></svg
                      ></span>
                    </button>
                  </li>
                  <li class="ant-pagination-options">
                    <div
                      class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                      aria-label="Page Size"
                    >
                      <div class="ant-select-selector">
                        <span class="ant-select-selection-search"
                          ><input
                            autocomplete="off"
                            type="search"
                            class="ant-select-selection-search-input"
                            role="combobox"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            aria-owns="rc_select_16_list"
                            aria-autocomplete="list"
                            aria-controls="rc_select_16_list"
                            aria-activedescendant="rc_select_16_list_0"
                            aria-label="Page Size"
                            readonly=""
                            unselectable="on"
                            value=""
                            id="rc_select_16"
                            style="opacity: 0" /></span
                        ><span
                          class="ant-select-selection-item"
                          title="10 / page"
                          >10 / page</span
                        >
                      </div>
                      <span
                        class="ant-select-arrow"
                        unselectable="on"
                        aria-hidden="true"
                        style="user-select: none"
                        ><span
                          role="img"
                          aria-label="down"
                          class="anticon anticon-down ant-select-suffix"
                          ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                            ></path></svg></span
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-labelledby="tabs--1--tab--2"
        role="tabpanel"
        tabindex="-1"
        data-reach-tab-panel=""
        id="tabs--1--panel--2"
        hidden=""
      >
        <div>
          <div class="space-y-4 pt-4">
            <form
              class="ant-form ant-form-inline w-full grid grid-cols-9 items-center gap-x-3 lg:grid-cols-12"
            >
              <div
                class="ant-row ant-form-item col-span-8 md:col-span-6 mr-0"
                style="row-gap: 0px"
              >
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <span class="ant-input-group-wrapper ant-input-search"
                        ><span class="ant-input-wrapper ant-input-group"
                          ><span class="ant-input-affix-wrapper"
                            ><input
                              placeholder="Search..."
                              id="search"
                              class="ant-input"
                              type="text"
                              value="" /><span class="ant-input-suffix"
                              ><span
                                role="button"
                                aria-label="close-circle"
                                tabindex="-1"
                                class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                ><svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  data-icon="close-circle"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                  ></path></svg></span></span></span
                          ><span class="ant-input-group-addon"
                            ><button
                              type="button"
                              class="ant-btn ant-btn-icon-only ant-input-search-button"
                            >
                              <span
                                role="img"
                                aria-label="search"
                                class="anticon anticon-search"
                                ><svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  data-icon="search"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                  ></path></svg
                              ></span></button></span></span
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="ant-row ant-form-item col-span-2 md:col-span-3 mr-0"
                style="row-gap: 0px"
              >
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <div
                        class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow"
                      >
                        <div class="ant-select-selector">
                          <span class="ant-select-selection-search"
                            ><input
                              id="isActive"
                              autocomplete="off"
                              type="search"
                              class="ant-select-selection-search-input"
                              role="combobox"
                              aria-haspopup="listbox"
                              aria-owns="isActive_list"
                              aria-autocomplete="list"
                              aria-controls="isActive_list"
                              aria-activedescendant="isActive_list_0"
                              readonly=""
                              unselectable="on"
                              value=""
                              style="opacity: 0" /></span
                          ><span class="ant-select-selection-placeholder"
                            >Status</span
                          >
                        </div>
                        <span
                          class="ant-select-arrow"
                          unselectable="on"
                          aria-hidden="true"
                          style="user-select: none"
                          ><span
                            role="img"
                            aria-label="down"
                            class="anticon anticon-down ant-select-suffix"
                            ><svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="down"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                              ></path></svg></span
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="justify-self-end mr-5">
                <button
                  type="button"
                  aria-label="reset fields"
                  class="rounded-sm p-1 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    t="1569683368540"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    class="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path
                      d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"
                    ></path>
                  </svg>
                </button>
              </div>
              <button
                id=""
                type="submit"
                class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300 justify-self-end col-span-9 md:col-span-2 mt-3 md:mt-0"
              >
                Add new Role
              </button>
            </form>
            <div class="ant-table-wrapper">
              <div class="ant-spin-nested-loading">
                <div class="ant-spin-container">
                  <div
                    class="ant-table ant-table-fixed-column ant-table-scroll-horizontal ant-table-has-fix-left"
                  >
                    <div class="ant-table-container">
                      <div
                        class="ant-table-content"
                        style="overflow: auto hidden"
                      >
                        <table
                          style="
                            width: auto;
                            min-width: 100%;
                            table-layout: fixed;
                          "
                        >
                          <colgroup></colgroup>
                          <thead class="ant-table-thead">
                            <tr>
                              <th
                                class="ant-table-cell w-40 ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                style="position: sticky; left: 0px"
                              >
                                Role Name
                              </th>
                              <th class="ant-table-cell">Role Type</th>
                              <th class="ant-table-cell">Date/time</th>
                              <th class="ant-table-cell">Actions</th>
                            </tr>
                          </thead>
                          <tbody class="ant-table-tbody">
                            <tr
                              aria-hidden="true"
                              class="ant-table-measure-row"
                              style="height: 0px; font-size: 0px"
                            >
                              <td
                                style="padding: 0px; border: 0px; height: 0px"
                              >
                                <div style="height: 0px; overflow: hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                style="padding: 0px; border: 0px; height: 0px"
                              >
                                <div style="height: 0px; overflow: hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                style="padding: 0px; border: 0px; height: 0px"
                              >
                                <div style="height: 0px; overflow: hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td
                                style="padding: 0px; border: 0px; height: 0px"
                              >
                                <div style="height: 0px; overflow: hidden">
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-row-key="60d5cf39-cee5-4993-9f8f-a6deb37721d6"
                              class="ant-table-row ant-table-row-level-0 text-secondary-100"
                            >
                              <td
                                class="ant-table-cell w-40 ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                style="position: sticky; left: 0px"
                              >
                                test
                              </td>
                              <td class="ant-table-cell">Dealer</td>
                              <td class="ant-table-cell">
                                07/11/2023, 9:39 am
                              </td>
                              <td class="ant-table-cell">
                                <div class="flex items-center gap-x-3">
                                  <span
                                    ><button
                                      type="button"
                                      aria-label="Activate Role"
                                      class="text-red hover:bg-red p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    >
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        aria-hidden="true"
                                        class="h-5 w-5"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                                        ></path>
                                        <path
                                          d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                        ></path>
                                      </svg></button></span
                                  ><button
                                    type="submit"
                                    aria-label="Edit role"
                                    class="rounded-sm p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-row-key="a075b0b5-0f8d-4079-8ec8-ab24ed875e6c"
                              class="ant-table-row ant-table-row-level-0"
                            >
                              <td
                                class="ant-table-cell w-40 ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                style="position: sticky; left: 0px"
                              >
                                Admin dealer
                              </td>
                              <td class="ant-table-cell">Admin dealer</td>
                              <td class="ant-table-cell">
                                05/16/2023, 2:37 pm
                              </td>
                              <td class="ant-table-cell">
                                <div class="flex items-center gap-x-3">
                                  <span
                                    ><button
                                      type="button"
                                      aria-label="Deactivate Role"
                                      class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    >
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        aria-hidden="true"
                                        class="h-5 w-5"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                        ></path>
                                        <path
                                          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                        ></path>
                                      </svg></button></span
                                  ><button
                                    type="submit"
                                    aria-label="Edit role"
                                    class="rounded-sm p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <ul
                    class="ant-pagination ant-table-pagination ant-table-pagination-right"
                    unselectable="unselectable"
                  >
                    <li class="ant-pagination-total-text">Total records 2</li>
                    <li
                      title="Previous Page"
                      class="ant-pagination-prev ant-pagination-disabled"
                      aria-disabled="true"
                    >
                      <button
                        class="ant-pagination-item-link"
                        type="button"
                        tabindex="-1"
                        disabled=""
                      >
                        <span
                          role="img"
                          aria-label="left"
                          class="anticon anticon-left"
                          ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                            ></path></svg
                        ></span>
                      </button>
                    </li>
                    <li
                      title="1"
                      class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                      tabindex="0"
                    >
                      <a rel="nofollow">1</a>
                    </li>
                    <li
                      title="Next Page"
                      class="ant-pagination-next ant-pagination-disabled"
                      aria-disabled="true"
                    >
                      <button
                        class="ant-pagination-item-link"
                        type="button"
                        tabindex="-1"
                        disabled=""
                      >
                        <span
                          role="img"
                          aria-label="right"
                          class="anticon anticon-right"
                          ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                            ></path></svg
                        ></span>
                      </button>
                    </li>
                    <li class="ant-pagination-options">
                      <div
                        class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                        aria-label="Page Size"
                      >
                        <div class="ant-select-selector">
                          <span class="ant-select-selection-search"
                            ><input
                              autocomplete="off"
                              type="search"
                              class="ant-select-selection-search-input"
                              role="combobox"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              aria-owns="rc_select_15_list"
                              aria-autocomplete="list"
                              aria-controls="rc_select_15_list"
                              aria-activedescendant="rc_select_15_list_0"
                              aria-label="Page Size"
                              readonly=""
                              unselectable="on"
                              value=""
                              id="rc_select_15"
                              style="opacity: 0" /></span
                          ><span
                            class="ant-select-selection-item"
                            title="10 / page"
                            >10 / page</span
                          >
                        </div>
                        <span
                          class="ant-select-arrow"
                          unselectable="on"
                          aria-hidden="true"
                          style="user-select: none"
                          ><span
                            role="img"
                            aria-label="down"
                            class="anticon anticon-down ant-select-suffix"
                            ><svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="down"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                              ></path></svg></span
                        ></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-labelledby="tabs--1--tab--3"
        role="tabpanel"
        tabindex="-1"
        data-reach-tab-panel=""
        id="tabs--1--panel--3"
      >
        <div class="space-y-4 py-4">
          <form
            id="userFilters"
            class="ant-form ant-form-inline grid grid-cols-12 items-center gap-x-4"
          >
            <div
              class="ant-row ant-form-item col-span-12 mr-0 mb-3 md:col-span-9 md:mr-4 md:mb-0 lg:col-span-10"
              style="row-gap: 0px"
            >
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <span class="ant-input-group-wrapper ant-input-search"
                      ><span class="ant-input-wrapper ant-input-group"
                        ><span class="ant-input-affix-wrapper"
                          ><input
                            placeholder="Search..."
                            id="userFilters_search"
                            class="ant-input"
                            type="text"
                            value="" /><span class="ant-input-suffix"
                            ><span
                              role="button"
                              aria-label="close-circle"
                              tabindex="-1"
                              class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="close-circle"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                ></path></svg></span></span></span
                        ><span class="ant-input-group-addon"
                          ><button
                            type="button"
                            class="ant-btn ant-btn-icon-only ant-input-search-button"
                          >
                            <span
                              role="img"
                              aria-label="search"
                              class="anticon anticon-search"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="search"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                ></path></svg
                            ></span></button></span></span
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 md:col-span-3 lg:col-span-2">
              <button
                id=""
                type="button"
                class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Add new user
              </button>
            </div>
          </form>
          <div class="ant-table-wrapper">
            <div class="ant-spin-nested-loading">
              <div class="ant-spin-container">
                <div class="ant-table ant-table-scroll-horizontal">
                  <div class="ant-table-container">
                    <div
                      class="ant-table-content"
                      style="overflow: auto hidden"
                    >
                      <table
                        style="
                          width: 800px;
                          min-width: 100%;
                          table-layout: auto;
                        "
                      >
                        <colgroup></colgroup>
                        <thead class="ant-table-thead">
                          <tr>
                            <th class="ant-table-cell w-40">Last name</th>
                            <th class="ant-table-cell w-40">First name</th>
                            <th class="ant-table-cell w-40">Role</th>
                            <th class="ant-table-cell w-40">Store(s)</th>
                            <th class="ant-table-cell w-40">Date/Time</th>
                            <th class="ant-table-cell w-40">Actions</th>
                          </tr>
                        </thead>
                        <tbody class="ant-table-tbody">
                          <tr
                            aria-hidden="true"
                            class="ant-table-measure-row"
                            style="height: 0px; font-size: 0px"
                          >
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                            <td style="padding: 0px; border: 0px; height: 0px">
                              <div style="height: 0px; overflow: hidden">
                                &nbsp;
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="70aa57f5-ee38-4e17-b257-03d338841555"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Groom</td>
                            <td class="ant-table-cell w-40">Seth</td>
                            <td class="ant-table-cell w-40">Admin dealer</td>
                            <td class="ant-table-cell w-40">
                              Neuville Store 1
                            </td>
                            <td class="ant-table-cell w-40">
                              05/16/2023, 2:38 pm
                            </td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center gap-x-3">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate User"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Edit user"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Delete user permanently"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="63d2e431-6a89-47dd-9d7b-0ca07e9c344d"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Rigor</td>
                            <td class="ant-table-cell w-40">Test</td>
                            <td class="ant-table-cell w-40">Admin dealer</td>
                            <td class="ant-table-cell w-40">
                              Neuville Store 1
                            </td>
                            <td class="ant-table-cell w-40">
                              07/06/2023, 2:39 pm
                            </td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center gap-x-3">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate User"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Edit user"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Delete user permanently"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="d9a668b4-0c28-4432-8525-09d285621683"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">rigor2</td>
                            <td class="ant-table-cell w-40">test2</td>
                            <td class="ant-table-cell w-40">Admin dealer</td>
                            <td class="ant-table-cell w-40">
                              Neuville Store 1
                            </td>
                            <td class="ant-table-cell w-40">
                              07/11/2023, 10:24 am
                            </td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center gap-x-3">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate User"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Edit user"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Delete user permanently"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="75190eea-2084-487a-bfca-fd97ba6d362f"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Rigor</td>
                            <td class="ant-table-cell w-40">Test</td>
                            <td class="ant-table-cell w-40">Admin dealer</td>
                            <td class="ant-table-cell w-40">
                              Neuville Store 1
                            </td>
                            <td class="ant-table-cell w-40">
                              07/12/2023, 11:40 am
                            </td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center gap-x-3">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate User"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Edit user"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Delete user permanently"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-row-key="1f91852b-4f24-414b-af90-33b494d45a0d"
                            class="ant-table-row ant-table-row-level-0"
                          >
                            <td class="ant-table-cell w-40">Arbelaez</td>
                            <td class="ant-table-cell w-40">Johan</td>
                            <td class="ant-table-cell w-40">Neuville</td>
                            <td class="ant-table-cell w-40">
                              Neuville Store 1
                            </td>
                            <td class="ant-table-cell w-40">
                              05/31/2023, 11:52 am
                            </td>
                            <td class="ant-table-cell w-40">
                              <div class="flex items-center gap-x-3">
                                <span
                                  ><button
                                    type="button"
                                    aria-label="Deactivate User"
                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      aria-hidden="true"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                      ></path>
                                      <path
                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Edit user"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                      ></path>
                                    </svg></button></span
                                ><span
                                  ><button
                                    type="button"
                                    aria-label="Delete user permanently"
                                    class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 1024 1024"
                                      class="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                      ></path>
                                    </svg></button
                                ></span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <ul
                  class="ant-pagination ant-table-pagination ant-table-pagination-right"
                  unselectable="unselectable"
                >
                  <li class="ant-pagination-total-text">Total records 5</li>
                  <li
                    title="Previous Page"
                    class="ant-pagination-prev ant-pagination-disabled"
                    aria-disabled="true"
                  >
                    <button
                      class="ant-pagination-item-link"
                      type="button"
                      tabindex="-1"
                      disabled=""
                    >
                      <span
                        role="img"
                        aria-label="left"
                        class="anticon anticon-left"
                        ><svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="left"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                          ></path></svg
                      ></span>
                    </button>
                  </li>
                  <li
                    title="1"
                    class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                    tabindex="0"
                  >
                    <a rel="nofollow">1</a>
                  </li>
                  <li
                    title="Next Page"
                    class="ant-pagination-next ant-pagination-disabled"
                    aria-disabled="true"
                  >
                    <button
                      class="ant-pagination-item-link"
                      type="button"
                      tabindex="-1"
                      disabled=""
                    >
                      <span
                        role="img"
                        aria-label="right"
                        class="anticon anticon-right"
                        ><svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                          ></path></svg
                      ></span>
                    </button>
                  </li>
                  <li class="ant-pagination-options">
                    <div
                      class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                      aria-label="Page Size"
                    >
                      <div class="ant-select-selector">
                        <span class="ant-select-selection-search"
                          ><input
                            autocomplete="off"
                            type="search"
                            class="ant-select-selection-search-input"
                            role="combobox"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            aria-owns="rc_select_17_list"
                            aria-autocomplete="list"
                            aria-controls="rc_select_17_list"
                            aria-activedescendant="rc_select_17_list_0"
                            aria-label="Page Size"
                            readonly=""
                            unselectable="on"
                            value=""
                            id="rc_select_17"
                            style="opacity: 0" /></span
                        ><span
                          class="ant-select-selection-item"
                          title="10 / page"
                          >10 / page</span
                        >
                      </div>
                      <span
                        class="ant-select-arrow"
                        unselectable="on"
                        aria-hidden="true"
                        style="user-select: none"
                        ><span
                          role="img"
                          aria-label="down"
                          class="anticon anticon-down ant-select-suffix"
                          ><svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                            ></path></svg></span
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

  )
}
