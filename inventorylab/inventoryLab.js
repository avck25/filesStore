 <link rel="icon" type="image/png" href="/Images/sprite_favicon.png" />
    <script type="text/javascript">
        window.analytics = window.analytics || [], window.analytics.methods = ["identify", "group", "track", "page", "pageview", "alias", "ready", "on", "once", "off", "trackLink", "trackForm", "trackClick", "trackSubmit"], window.analytics.factory = function (t) { return function () { var a = Array.prototype.slice.call(arguments); return a.unshift(t), window.analytics.push(a), window.analytics } }; for (var i = 0; i < window.analytics.methods.length; i++) { var key = window.analytics.methods[i]; window.analytics[key] = window.analytics.factory(key) } window.analytics.load = function (t) { if (!document.getElementById("analytics-js")) { var a = document.createElement("script"); a.type = "text/javascript", a.id = "analytics-js", a.async = !0, a.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.io/analytics.js/v1/" + t + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(a, n) } }, window.analytics.SNIPPET_VERSION = "2.0.9",
  window.analytics.load("7prmcmxoq2");
        window.analytics.page();
    </script>
</head>
<body data-delegate="close-open-popups panel-scale" class="body_list-prep" id="inventorylab">
    <div class="status-message">
        We will be performing system maintenance</div>
    <div id="subscriptionReminder" style="display: none; background-color: #4c4c4c; background-image: linear-gradient(#4c4c4c, #363636);
        background-size: 100% auto; height: 50px; text-align: center; width: 100%;">
        
    </div>
    <div class="head" id="head">
        <div class="head_main">
  <div class="inventory-lab_logo"></div>
  <div class="head_primary-navigation">
      <a class="head_navigation_item head_navigation_item_default -nav_dashboard" href="/dashboard" id="topMenu_Dashboard">
        <span class="head_navigation_item_label">
          <span class="head_navigation_item_text">Dashboard</span>
        </span>
      </a>
        <span class="dropdown-container" data-dingo="dropdown-control">
      <span class="head_navigation_item head_navigation_item_dropdown" id="topMenu_Scout">
        <span class="head_navigation_item_label">
          <span class="head_navigation_item_text">Research</span>
          <span class="dropdown-indicator"></span>
        </span>
      </span>
      <ul class="dropdown" id="topMenu_Scout_SubMenu">
        <li class="dropdown-item -odd -first">
          <a href="/scout">Scout</a>
        </li>
        <li class="dropdown-item -even -between">
          <a href="/scout/history">History</a>
        </li>
        <!--
        <li class="break"></li>
        <li class="dropdown-item -even -last">
          <a href="">Buy List</a>
        </li>
        -->
      </ul>
    </span>
        <a class="head_navigation_item head_navigation_item_default -nav_list" href="/list" id="topMenu_List">
      <span class="head_navigation_item_label">
        <span class="head_navigation_item_text">List</span>
      </span>
    </a>
        <span class="dropdown-container" data-dingo="dropdown-control">
      <span class="head_navigation_item head_navigation_item_dropdown" id="topMenu_Inventory">
        <span class="head_navigation_item_label">
          <span class="head_navigation_item_text">Inventory</span>
          <span class="dropdown-indicator"></span>
        </span>
      </span>
      <ul class="dropdown" id="topMenu_Inventory_SubMenu">
        <li class="dropdown-item -odd -first">
          <a href="/bookkeep/fbainventory">FBA</a>
        </li>
        <li class="dropdown-item -even -between">
          <a href="/bookkeep/mfninventory">Merchant</a>
        </li>
        <li class="break"></li>
        <li class="dropdown-item -even -last">
          <a href="/list/closedbatches">Closed Batches</a>
        </li>
        <!--<li class="dropdown-item -even -between">
          <a href="~/list/closedbatches">Closed Batches</a>
        </li>
        <li class="dropdown-item -odd -last">
          <a href="~/list/workingshipments">Working Shipments</a>
        </li>-->
      </ul>
    </span>
        <span class="dropdown-container">
      <span class="head_navigation_item head_navigation_item_dropdown" id="topMenu_Accounting">
        <span class="head_navigation_item_label">
          <span class="head_navigation_item_text">Accounting</span>
          <span class="dropdown-indicator"></span>
        </span>
      </span>
      <ul class="dropdown" id="topMenu_Accounting_SubMenu">
        <li class="dropdown-item -odd -first">
            <a href="/bookkeep/fbasales" id="lnkFBASales">FBA Sales
            </a>
        </li>
        <li class="dropdown-item -even">
            <a href="/bookkeep/merchantsales" id="lnkMerchantSales">Merchant Sales
            </a>
        </li>
        <li class="break"></li> 
        <li class="dropdown-item -odd">
          <a href="/bookkeep/refunds" id="lnkRefunds">Refunds
          </a>
        </li>
        <li class="dropdown-item -even -member">
          <a href="/bookkeep/reimbursements" id="lnkReimbursements">Reimbursements
          </a>
        </li>
        <li class="dropdown-item -odd -member">
            <a href="/bookkeep/otherincome" id="lnkOtherIncome">Other Income 
            </a>
        </li>
        <li class="break"></li>
        <li class="dropdown-item -even -member">
          <a href="/bookkeep/inboundshipping" id="lnkInboundShipping">Inbound Shipping
          </a>
        </li>
        <li class="dropdown-item -odd -member">
          <a href="/bookkeep/mileage" id="lnkMileage">Mileage
          </a>
        </li>
        <li class="dropdown-item -even -last">
          <a href="/bookkeep/otherexpenses" id="lnkOtherExpenses">Other Expenses
          </a>
        </li>
      </ul>
    </span>
        <span class="dropdown-container" data-dingo="dropdown-control">
      <span class="head_navigation_item head_navigation_item_dropdown" id="topMenu_Analyze">
        <span class="head_navigation_item_label">
          <span class="head_navigation_item_text">Reports</span>
          <span class="dropdown-indicator"></span>
        </span>
      </span>
      <ul class="dropdown" id="topMenu_Analyze_SubMenu">
        <li class="dropdown-item -odd -first">
            <a href="/analyze/supplierprofitability" id="lnkSupplierProfitability">Supplier Profitability
            </a>
        </li>
        <li class="dropdown-item -even">
            <a href="/analyze/categoryprofitability" id="lnkCategoryProfitability">Category Profitability
            </a>
        </li>
        <li class="dropdown-item -odd">
          <a href="/analyze/skuprofitability" id="lnkSKUProfitability">SKU Profitability
          </a>
        </li>
        <li class="dropdown-item -even -between">
          <a href="/analyze/asinprofitability" id="lnkASINProfitability">ASIN profitability
          </a>
        </li>
        <li class="break"></li>
        <li class="dropdown-item -first">
            <a href="/analyze/inventoryvaluation" id="lnkInvVal"> Inventory Valuation 
            </a>
        </li>
        <li class="break"></li>
        <li class="dropdown-item -odd -between">
          <a href="/analyze/salestax" id="lnkSalesTax">Sales Tax Report
          </a>
        </li>
        <li class="dropdown-item -even -last">
          <a href="/analyze/profitloss" id="lnkProfitLoss">Profit and Loss
          </a>
        </li>
      </ul>
    </span>
    <!-- Analyze -->

    <!-- Help -->
    <span class="dropdown-container">
      <span class="head_navigation_item head_navigation_item_dropdown" id="topMenu_Help">
        <span class="head_navigation_item_label">
          <span class="head_navigation_item_text">Help</span>
          <span class="dropdown-indicator"></span>
        </span>
      </span>
      <ul class="dropdown" id="topMenu_Help_SubMenu">
        <li class="dropdown-item -odd -between">
            <a href="http://www.manula.com/manuals/inventorylab/inventorylab-user-guide/1/en/topic/introduction" target="_blank">User Guide</a>
        </li>
        <li class="break"></li>
        <li class="dropdown-item -odd -between">
            <a href="https://inventorylab.yonyx.com/y/portal/?id=32037ab3-0cde-11e5-9639-bc764e11861e&h=1&st=0&at=browse" target="_blank">Troubleshooting</a>
        </li>
        <li class="break"></li>
        <li class="dropdown-item -odd -between">
            <a href="https://support.inventorylab.com/" target="_blank">Support Portal</a>
        </li>
      </ul>
    </span>
    <!-- Help -->
    
     </div>

     <!--<div class="head_secondary-navigation">
        <span class="head_navigation_item -nav_alert dropdown-control--right" data-dingo="dropdown-control navigation-indicator" data-help="Click here to access your account options &amp; settings">
          <span class="head_navigation_item_label">
            <span class="head_navigation_item_text -indicator">
              <i class="icon-alert"></i>
              <span class="navigation-indicator"></span>
            </span>
            <span class="dropdown dropdown-html" style="top: 38px;">
              <span class="dropdown-html_unread" style="display: none;">
                <span class="dropdown-head">Alert</span>
                <span class="dropdown-body">We have some new things to add to InventoryLab, maintenance is scheduled for 2:00AM (PST)</span>
              </span>
              <span class="dropdown-html_read" style="display: inline;">
                <span class="dropdown-head">Alert</span>
                <span class="dropdown-body">No Alerts</span>
              </span>
            </span>
          </span>
        </span>
        <a href="notifications.html" class="head_navigation_item -nav_notifications" data-dingo="navigation-indicator">
          <span class="head_navigation_item_label -notifications">
            <span class="head_navigation_item_text">
              <i class="icon-notification"></i>
              <span class="navigation-indicator -unread"></span>
            </span>
          </span>
        </a>
     </div>-->

   <div class="head_secondary-navigation">
    <a href="/settings/notifications" class="head_navigation_item -nav_notifications">
      <span class="head_navigation_item_label -notifications">
        <span class="head_navigation_item_text">
          <i class="icon-notification"></i>
                <span class="navigation-indicator navigation-indicator--unread"></span>
        </span>
      </span>
    </a>
   <span class="dropdown-container" data-dingo="dropdown-control">
        <span class="head_navigation_item head_navigation_item_dropdown" id="topMenu_Settings">
          <span class="head_navigation_item_label">
            <span class="head_navigation_item_text">naomi kurtz</span>
            <span class="dropdown-indicator"></span>
          </span>
        </span>
        <ul class="dropdown" id="topMenu_Settings_SubMenu">
                <li class="dropdown-item -odd -first">
                    <a href="/account/contact">My Account</a>
                </li>
                <li class="break"></li>
                <li class="dropdown-item -odd -between">
                    <a href="/settings/shipinformation">Settings</a>
                </li>
                <li class="break"></li>
         
          <li class="dropdown-item -odd -between">
            <a href="/logout" id="lnkLogout">Logout</a>
          </li>
        </ul>
      </span>
  </div>
</div>


    </div>
    <div id="downloadFileModal" class="modal">
        <div class="modal_window">
            <span class="modal_title"><span class="modal_icon-alert"></span>Download File </span>
            <div class="form-validate-container">
                <span class="modal_content"><span class="row g24 form-validate-group">
                    <label class="g8" for="batch-name">
                        File Name <span class="form-required">*</span> :
                    </label>
                    <span class="g16">
                        <input type="text" class="block" id="txtDownloadFileName"></span> </span>
                </span>
                <div class="modal_control">
                    <span class="btn-blue" id="btnDownloadOK">OK</span> <span class="btn-grey" id="btnDownloadCancel">
                        Close</span>
                </div>
            </div>
        </div>
    </div>
    <div id="sessionTimeoutModal" class="modal">
        <div class="modal_window" style="width: 400px;">
            <div class="modal_title">
                <span class="modal_icon-alert"></span>Session Timeout
            </div>
            <div class="form-validate-container">
                <div class="modal_content">
                    <span class="row g24 form-validate-group">
                        <label class="g12">
                            You will be logged out in
                        </label>
                        <label id="timeout-countdown" class="g2">
                            60
                        </label>
                        <label class="g1">
                            seconds</label>
                    </span>
                </div>
                <div class="modal_control">
                    <span class="btn-blue" id="btnSessionExtend">Yes, Keep me signed in</span> <span
                        class="btn-grey" id="btnSessionExpire">No, Sign me out</span>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" id="OnBoarding_PrintSetup">
        <div class="modal_window">
            <div class="modal_chrome">
                <span class="modal_title">Printer Setup</span>
                <div class="modal_screen modal_screen_active" id="step0_1">
                    <div class="modal_content">
                        <span class="g24 center">
                            <div class="select" id="seZebra_1">
                                <a class="icon-printer-zebra" id="lnkZebra_1" href="javascript:void(0)"></a>
                            </div>
                            <div class="select" id="seDymo_1">
                                <a class="icon-printer-dymo" id="lnkDymo_1" href="javascript:void(0)"></a>
                            </div>
                            <div class="select" id="seNone_1">
                                <a class="icon-printer-none" id="lnkNone_1" href="javascript:void(0)"></a>
                            </div>
                        </span>
                    </div>
                    <div class="modal_control">
                        <span id="step0Close_1" class="btn-grey">Cancel</span> <span id="step0Next_1" class="btn-blue">
                            Next</span>
                    </div>
                </div>
                <div class="modal_screen" id="step_dymoMissing_1">
                    <div class="modal_content">
                        <span class="modal_text">If you have already installed the DYMO printer software, please click the Next button to continue.</span>
                        <span class="modal_subtext">Otherwise, download the software by clicking the button below.</span>
                        <span class="g24 center">
                            <span class="btn-blue btn-cto" id="btnDymoWinDownload_1" style="display: none;">Download LabelWriter for Windows</span>
                            <span class="btn-blue btn-cto" id="btnDymoMacDownload_1" style="display: none;">Download LabelWriter for Mac</span>
                            <span class="modal_subtext" id="linkDymoOtherDownload_1" style="display: none;">
                                Or visit the official
                                <a href="https://www.dymo.com/en-US/dymo-user-guides" target="_blank">download page</a>
                            </span>
                            <span class="modal_subtext" id="linkDymoWinChromeDownload_1" style="display: none;">
                                Or visit the official
                                <a href="http://developers.dymo.com/2016/01/05/dymo-label-software-version-8-5-3-for-patch-release-macwin/" target="_blank">download page</a>
                            </span>
                            <span class="modal_subtext">After the software has been downloaded and installed, please click the Next button.</span>
                        </span>
                    </div>
                    <div class="modal_control">
                        <span class="btn-grey" id="dymoback1_1">Prev</span>
                        <span class="btn-blue" id="step1Next_1">Next</span>
                    </div>
                </div>
                <div class="modal_screen" id="step_dymo1_1">
                    <div class="modal_content">
                        <span class="modal_text">Select DYMO printer and label type</span>
                        <span class="g24 center">
                            <div class="form-row">
                                <span class="g6">
                                    <label>DYMO printer:</label>
                                </span>
                                <span class="g10 scale-form">
                                    <select id="dymoPrinters_1">
                                        <option>Select</option>
                                    </select>
                                </span>
                            </div>
                            <div class="form-row">
                                <span class="g6">
                                    <label>Label type:</label>
                                </span>
                                <span class="g10 scale-form">
                                    <select id="dymoLabelType_1">
                                        <option value="30252" selected="selected">30252</option>
                                        <option value="30334">30334</option>
                                        <option value="30321">30321</option>
                                        <option value="30336">30336</option>
                                    </select>
                                </span>
                            </div>
                            <div class="form-row">
                                <span class="g6">
                                    <label>Roll side:</label>
                                </span>
                                <span class="g10 scale-form">
                                    <select id="dymoRollSide_1">
                                        <option value="Left">Left</option>
                                        <option value="Right">Right</option>
                                    </select>
                                </span>
                            </div>
                        </span>
                    </div>
                    <div class="modal_control">
                        <span class="btn-grey" id="dymoback_1">Prev</span>
                        <span class="btn-blue" id="dymodone_1">Done</span>
                    </div>
                </div>
                <div class="modal_screen" id="step_zebraMissing_1">
                    <div class="modal_content">
                        <span class="modal_text">You are missing the JS Print Plugin</span> <span class="modal_subtext">
                            visit the official <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/js-print-setup/">
                                download page</a> </span><span class="modal_text">Note: After installed, you need to
                                    restart web browser and go back. </span>
                    </div>
                    <div class="modal_control">
                        <span class="btn-grey" id="zebraback1_1">Prev</span>
                    </div>
                </div>
                <div class="modal_screen" id="step_zebra1_1">
                    <div class="modal_content">
                        <span class="modal_text">Select your printer:</span> <span class="g24 center">
                            <div class="form-row">
                                <span class="g10">
                                    <label>
                                        Printer:</label>
                                </span><span class="g10 scale-form">
                                    <select id="zabraPrinters_1">
                                        <option>Select</option>
                                    </select>
                                </span>
                            </div>
                            <div class="form-row">
                                <span class="g10">
                                    <label>
                                        Label width size in Inches:</label>
                                </span><span class="g10 scale-form">
                                    <input type="text" class="price" id="txtWidth_1" />
                                </span>
                            </div>
                            <div class="form-row">
                                <span class="g10">
                                    <label>
                                        Label height size in Inches:</label>
                                </span><span class="g10 scale-form">
                                    <input type="text" class="price" id="txtHeight_1" />
                                </span>
                            </div>
                        </span>
                    </div>
                    <div class="modal_control">
                        <span class="btn-grey" id="zebraback_1">Prev</span> <span class="btn-blue" id="zebradone_1">
                            Done</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="OnBoarding_PrintSetupFinished" class="modal">
        <div class="modal_window">
            <form class="modal_chrome">
            <span class="modal_title">Print Setup Finished</span>
            <div class="modal_content">
                <span class="modal_text">Welcome to InventoryLab! Your data is importing now. An email will be delivered to you when it is completed. 
                While it is importing, please check out our <a href="http://www.manula.com/manuals/inventorylab/inventorylab-user-guide/1/en/topic/introduction" target="_blank">User Guide</a> 
                and download <a href="http://www.manula.com/manuals/inventorylab/inventorylab-user-guide/1/en/topic/how-to-download" target="_blank">Scoutify</a>, our mobile sourcing app</span>
            </div>
            <div class="modal_control">
                <span data-delegate="print-setup-done" class="btn-blue" id="OnBoarding_PrintSetupDone">DONE</span>
            </div>
            </form>
        </div>
    </div>
    <div id="OnBoarding_MWSSetup" class="modal">
        <div class="modal_window">
            <form class="modal_chrome">
            <span class="modal_title">Add your seller account</span>
            <div class="modal_content">
                <span class="modal_text">We're almost done setting you up. You will now be redirected
                    to Amazon so that we can collect your MWS account credentials.</span>
            </div>
            <div class="modal_control">
                <span class="btn-blue" id="GetMWSPipeline">OK</span>
            </div>
            </form>
        </div>
    </div>
    <div id="addOtherExpenseModal" class="modal">
        <div class="modal_window">
            <span class="modal_title"><span class="modal_icon-alert"></span>Add Recurring Expense
            </span>
            <div class="form-validate-container">
                <div class="modal_content center">
                    <div class="form-container">
                        <div class="form-row">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddCategoryForAdd">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Category</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <div id="AddExpenseCategorySearchDropdown">
                                    </div>
                                    <div class="form-validate-prompt" id="divAddCategoryInvalid">
                                        <div class="arrow">
                                        </div>
                                        <div class="form-validate-prompt_text">
                                            Invalid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddDate">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Date</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <div class="datepicker">
                                        <input id="txtAddDate" class="datepicker-input willTriggerResetForAdd willTriggerRepeatDescription willTriggerSetRepeatDescriptionForAdd"
                                            type="text" readonly>
                                        <i class="icon-calendar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddCost">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Amount</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <div class="price">
                                        <div class="price_label">
                                            $</div>
                                        <input class="form-group_input -price block willTriggerReset" type="text" id="txtAddCost"
                                            name="form-group_cost" tabindex="0" value="" />
                                        <div class="form-validate-prompt" id="divAddCostInvalid">
                                            <div class="arrow">
                                            </div>
                                            <div class="form-validate-prompt_text">
                                                Invalid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddDescription">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Description</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <div class="description">
                                        <input type="text" class="form-group_input block" id="txtAddDescription" />
                                    </div>
                                    <div class="form-validate-prompt" id="divAddDescriptionInvalid">
                                        <div class="arrow">
                                        </div>
                                        <div class="form-validate-prompt_text">
                                            Invalid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddRepeat">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Repeat</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <select class="form-group_input block" id="txtAddRepeat" name="add-other-expense_summary_repeat"
                                        data-dingo="view-toggle add-other-expense_summary_update" tabindex="0">
                                        <option value="Never" data-toggle="hide{.add-other-expense_repeat,.add-other-expense_repeat-weekly,.add-other-expense_repeat-monthly}">
                                            Never</option>
                                        <option value="Weekly" data-toggle="show{.add-other-expense_repeat,.add-other-expense_repeat-weekly}hide{.add-other-expense_repeat-monthly}">
                                            Weekly</option>
                                        <option value="Monthly" data-toggle="show{.add-other-expense_repeat,.add-other-expense_repeat-monthly}hide{.add-other-expense_repeat-weekly}">
                                            Monthly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row add-other-expense_repeat _hidden" id="addRepeatEveryNWeeks">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddEveryNWeeks">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Repeat every</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <input class="form-group_input input--qty  -append willTriggerResetForAdd willTriggerSetRepeatDescriptionForAdd"
                                        type="text" id="txtAddEveryNWeeks" name="add-other-expense_summary_frequency"
                                        tabindex="0" value="1" />
                                    <label>
                                        weeks</label>
                                    <div class="form-validate-prompt" id="divAddRepeatEveryNWeeksInvalid">
                                        <div class="arrow">
                                        </div>
                                        <div class="form-validate-prompt_text">
                                            Invalid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row" id="addMonthRepeatDay">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddMonthRepeatDay">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Repeat day</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <select class="form-group_input block" id="txtAddMonthRepeatDay" name="add-other-expense_summary_repeat"
                                        tabindex="0">
                                        <option value="month">Day of the month</option>
                                        <option value="week">Day of the week</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row add-other-expense_repeat _hidden" id="addRepeatEveryNMonth">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddEveryNWeeks">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Repeat every</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <input class="form-group_input input--qty  -append willTriggerResetForAdd willTriggerSetRepeatDescriptionForAdd"
                                        type="text" id="txtAddEveryNMonths" name="add-other-expense_summary_frequency"
                                        tabindex="0" value="1" />
                                    <label>
                                        months</label>
                                    <div class="form-validate-prompt" id="divAddRepeatEveryNMonthsInvalid">
                                        <div class="arrow">
                                        </div>
                                        <div class="form-validate-prompt_text">
                                            Invalid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row add-other-expense_repeat-weekly _hidden" id="addRepeatOnWeek">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="form-group_repeat-on">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        Repeat on</label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <div id="daysInWeekForAdd" class="form-group_toggle-group btn-group">
                                        <div class="btn-grey btn-group--first form-group_toggle-group_member--1" id="addSun"
                                            style="width: 14.285714285714286%">
                                            Sun</div>
                                        <div class="btn-grey btn-group--member form-group_toggle-group_member--2" id="addMon"
                                            style="width: 14.285714285714286%">
                                            Mon</div>
                                        <div class="btn-grey btn-group--member form-group_toggle-group_member--3" id="addTue"
                                            style="width: 14.285714285714286%">
                                            Tue</div>
                                        <div class="btn-grey btn-group--member form-group_toggle-group_member--4 " id="addWed"
                                            style="width: 14.285714285714286%">
                                            Wed</div>
                                        <div class="btn-grey btn-group--member form-group_toggle-group_member--5 " id="addThu"
                                            style="width: 14.285714285714286%">
                                            Thu</div>
                                        <div class="btn-grey btn-group--member form-group_toggle-group_member--6 " id="addFri"
                                            style="width: 14.285714285714286%">
                                            Fri</div>
                                        <div class="btn-grey btn-group--last form-group_toggle-group_member--7 " id="addSat"
                                            style="width: 14.285714285714286%">
                                            Sat</div>
                                    </div>
                                    <div class="form-validate-prompt" id="divAddDaysInWeekInvalid">
                                        <div class="arrow">
                                        </div>
                                        <div class="form-validate-prompt_text">
                                            Invalid
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row add-other-expense_repeat-monthly" id="addRepeatOnMonth">
                            <div class="form-group block">
                                <div class="col1of2-sm g7 form-group_left">
                                    <label class="form-group_label block" for="txtAddDayInMonth">
                                        <div class="form-group_label_validation-indicator">
                                        </div>
                                        <span id="lblMonthlyRepeatDay">Day in month</span></label>
                                </div>
                                <div class="col2of2-sm g17 form-group_right ">
                                    <div class="datepicker">
                                        <input id="txtAddDayInMonth" class="datepicker-input willTriggerResetForAdd willTriggerRepeatDescription willTriggerSetRepeatDescriptionForAdd"
                                            type="text" readonly>
                                        <i class="icon-calendar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="add-other-expense_summary form_summary" id="add-other-expense_summary">
                    <span class="form_summary_text" id="txtRepeatDescription">Add this expense on <em><span
                        id="lblRepeatDetailsForAdd">Never</span> <span id="lblRepeatCycleForAdd"></span>
                    </em></span><span class="form_summary_text">Starting from <em><span id="lblStartDateForAdd">
                    </span></em></span>
                </div>
                <div class="modal_control">
                    <span class="btn-grey" tabindex="0" id="btnAddCancel">Cancel</span> <span class="btn-blue"
                        tabindex="0" id="btnAddOK">Create</span>
                    <!--  <span class="btn-grey" tabindex="0" id="btnSaveSettingsCancel">Cancel</span> -->
                    <span class="btn-blue" tabindex="0" id="btnSaveOK">Ok</span>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" id="legacySyncModal">
      <div class="modal_window" id="legacySyncWin">
        <div class="modal_title">
          <div class="modal_icon-alert"></div>
          Legacy Sync
        </div>
        <div class="modal_content">
            <div class="g24 left-side">
                <div class="form-row">
                    <p>We have collected legacy settlement reports from Amazon that exceed your legacy sync limit. The charge for every 500 orders synced is $10. If you would like InventoryLab to sync these orders, you will need to agree to the following charges:</p>
                </div>
                <div class="form-row">
                    <div class="g5 right">
                        <label>Order Total: </label>
                    </div>
                    <div class="g4 right">
                        <label><span id="txtTotalOrder"></span> Orders</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="g5 right">
                        <label>Legacy Sync Charge: </label>
                    </div>
                    <div class="g4 right">
                        <div class="price">
                            <label class="price" id="txtTotalCharge">
                            </label>
                            <label class="price-badge">$</label>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="g5 right">
                        <label>Legacy Sync Date: </label>
                    </div>
                    <div class="g19">
                        <div class="g6 scale-form">
                            <div class="datepicker">
                              <input type="text" class="datepicker-input" id="txtLegacySyncStart"/>
                              <i class="icon-calendar"></i>
                            </div>
                        </div>
                        <label class="g2 scale-form" style="padding-left:20px"> to </label>
                        <div class="g6 scale-form">
                            <div class="datepicker">
                              <input type="text" class="datepicker-input" id="txtLegacySyncEnd"/>
                              <i class="icon-calendar"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal_control">
          <span class="btn-grey" id="btnCancelSync">Close</span>
          <a class="btn-red" id="btnDenySync" href="javascript:void(0)">
            Deny
          </a>
          <a class="btn-blue" id="btnAcceptSync" href="javascript:void(0)">
            Accept
          </a>
        </div>
      <!-- .modal_chrome --> </div>
    <!-- .modal_window --> </div>
    <div class="modal" data-modal="credit-card" id="addCreditCardModal">
    <div class="modal_window form-validate-container">
        <div class="modal_chrome">
            <span class="modal_title">
                <span class="modal_icon-alert"></span>
                Add Credit Card
            </span>
            <div class="modal_content">
                <div class="form-container">
                    <div class="form-row">
                        <div class="form-validate-group block">
                            <label class="g8 right">
                                Number
                                <span class="form-required">*</span>
                                :
                            </label>
                            <div class="g16">
                                <input type="text" class="block" id="txtAddCardNumber"  autocomplete="off"
                                                data-encrypted-name="addCardNumber"  data-dingo="form-validate" />

                                <div class="form-validate-prompt" id="err_add_CreditCard">
                                    <div class="form-validate-prompt_text">Invalid credit card number</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-validate-group block">
                            <label class="g8 right">
                                Name on card
                                <span class="form-required">*</span>
                                :
                            </label>
                            <div class="g16">
                                <input type="text" class="block" name="credit-card-name" id="txtAddCardName" data-dingo="form-validate" />
                                <div class="form-validate-prompt" id="err_add_CardName">
                                    <div class="form-validate-prompt_text">Invalid Name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <label class="g8 right">
                            Expiration Date
                            <span class="form-required">*</span>
                            :
                        </label>
                        <div class="g8 col1of2-sm">
                            <div class="form-validate-group block">
                                <select class="block" name="credit-card-month" id="selAddCardMonth" data-dingo="form-validate">
                                    <option value="00">Month</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <div class="form-validate-prompt" id="err_add_Month">
                                    <div class="form-validate-prompt_text">Invalid Month</div>
                                </div>
                            </div>
                        </div>
                        <div class="g8 col2of2-sm">
                            <div class="form-validate-group block">
                                <select class="block" name="credit-card-year" id="selAddCardYear" data-dingo="form-validate">
                                    <option value="0000">Year</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                    <option value="2045">2045</option>
                                </select>
                                <div class="form-validate-prompt" id="err_add_Year">
                                    <div class="form-validate-prompt_text">Invalid Year</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-validate-group block">
                            <div class="row-sm">
                                <label class="g8 right">
                                    CVV
                                    <span class="form-required">*</span>
                                    :
                                </label>
                                <div class="g16">
                                    <input type="text" class="g5" id="txtAddCardCVV" data-dingo="form-validate"  autocomplete="off"
                                                data-encrypted-name="updCVV" >
                                    <div class="form-validate-prompt" id="err_add_CVV">
                                        <div class="form-validate-prompt_text">Invalid CVV</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row-sm">
                                <span class="help-text left8">The 3 digit number on the back of your card</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content -->
            <div class="modal_control">
                <span class="btn-blue" id="btnAddCardOK">Add</span>
                <span class="btn-grey" id="btnAddCardClose">Cancel</span>
            </div>
        </div>
    </div>
    <!-- modal window -->
</div>
    
<div class="body">
	<iframe id="myIframe" style="display:none"></iframe>
	<div class="panel-container" id="main-app-panels">
		<div class="right-panel right-panel--fullwidth" id="divSearch">
			<div class="status-bar" id="SearchBar">

				<div class="breadcrumbs">
					<span class="breadcrumb -first-last -active">
						<span class="breadcrumb_text">Scout</span>
						<span class="breadcrumb_arrow -first-last"></span>
					</span>
				</div>

				<div class="status-control">
					<div class="search">
						<input type="text" class="btn-group--member" id="txtProduct" autocomplete="off" />
						<div class="btn-blue _search">Search</div>
					</div>
				</div>
			</div>
			<div class="amazon-catalog-results">
				<div class="scrollable">
					<div id="SearchResultList"></div>
					<div class="section-container" id="emptyBox" style="display:none">
						<div class="alert-help"> <i class="icon-micro-help"></i>
                            <div id="alert-message" class="alert-text">Product not found.</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="right-panel right-panel--fullwidth" id="divProductDetails" style="display:none">

			<div class="status-bar">

				<div class="breadcrumbs">
					<a class="breadcrumb -first -enabled" id="backToScout" href="javascript:void(0)">
						<span class="breadcrumb_text">Scout</span>
						<span class="breadcrumb_arrow -first"></span>
					</a>
					<span class="breadcrumb -last -active">
						<span class="breadcrumb_text" id="lblasin"></span>
						<span class="breadcrumb_arrow -last"></span>
					</span>
				</div>

				<div class="status-control">
					<select id="channel">
						<option selected="" value="0">Base Profit as FBA</option>
						<option value="1">Base Profit as MFN</option>
					</select>
					<div class="seperator"></div>
					<div class="search">
						<input type="text" class="btn-group--member" id="txtProduct2" autocomplete="off" />
						<div class="btn-blue _search">Search</div>
					</div>
				</div>

			</div>

			<div class="right-panel_content">
				<div class="item-listing_main">
					<div class="item-listing_main_container">
						<div class="item-listing_main_info">
							<div class="item-listing_main_info_container">
								<div class="item-listing_main_img col1of2-sm">
									<img src="/Images/placeholders/batman-funko.png" id="imgproduct">
								</div>
								<div class="item-listing_main_attributes col2of2-sm">
									<a target="_blank" class="item-listing_main_attributes_title" id="lbltitle"></a>
									<span class="item-listing_main_attributes_author" id="lblauthor"></span>
                                    <span class="item-listing_main_attributes_item">
                                        <span class="item-listing_main_attributes_item_label">Rank:</span>
                                        <span class="item-listing_main_attributes_item_value" id="lblsalesrank"></span>
                                    </span>
                                    <span class="item-listing_main_attributes_item">
                                        <span class="item-listing_main_attributes_item_label">Category:</span>
                                        <span class="item-listing_main_attributes_item_value" id="lblcategory"></span>
                                    </span>
                                    <span class="item-listing_main_attributes_item">
                                        <span class="item-listing_main_attributes_item_label">Size Tier:</span>
                                        <span class="item-listing_main_attributes_item_value" id="lblSize"></span>
                                    </span>
                                    <span class="item-listing_main_attributes_item">
                                        <span class="item-listing_main_attributes_item_label">Prep Type:</span>
                                        <span class="item-listing_main_attributes_item_value" id="lblpreptype"></span>
                                    </span>
								</div>
							</div>
						</div>
						<div class="item-listing_main_settings">
							<div class="scrollable">
								<div class="section-container mobile_modal" mobile-modal="amazon-fees">
									<div class="form-container">
										<div class="row-xl">
											<h2>Fees</h2>
											<div class="row-sm">
												<div class="g6 m10 col1of2">
													<label class="block right">Commission:</label>
												</div>
												<div class="g18 m14 col2of2">
													<label class="block"  id="lblCommission"></label>
												</div>
											</div>
											<div class="row-sm">
												<div class="g6 m10 col1of2">
													<label class="block right">VCF:</label>
												</div>
												<div class="g18 m14 col2of2">
													<label class="block" id="lblVCF"></label>
												</div>
											</div>
											<div class="row-sm">
												<div class="g6 m10 col1of2">
													<label class="block right">Pick & Pack:</label>
												</div>
												<div class="g18 m14 col2of2">
													<label class="block" id="lblPickPack"></label>
												</div>
											</div>
											<div class="row-sm">
												<div class="g6 m10 col1of2">
													<label class="block right">Order Handling:</label>
												</div>
												<div class="g18 m14 col2of2">
													<label class="block" id="lblOrderHandling"></label>
												</div>
											</div>
											<div class="row-sm">
												<div class="g6 m10 col1of2">
													<label class="block right">Weight Based:</label>
												</div>
												<div class="g18 m14 col2of2">
													<label class="block" id="lblWeightBased"></label>
												</div>
											</div>
										</div>
										<div class="row-xl">
											<h2>Expenses</h2>
											<div class="row-sm">
												<div class="g6 m10 col1of2">
													<label class="block right">Shipping:</label>
												</div>
												<div class="g18 m14 col2of2">
													<label class="block">
														<span id="lblShipping"></span>
														(Rate of
														<a href="javascript:void(0)" id="btnShippingRate"></a>
														/lb)
													</label>
												</div>
											</div>
											<div class="row-sm">
												<div class="g6 m10 col1of2">
													<label class="block right">Sales Tax:</label>
												</div>
												<div class="g18 m14 col2of2">
													<label class="block">
														<span id="lblSalesTax"></span>
														(
														<a href="javascript:void(0)" id="btnTaxRate"></a>
														)
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="item-listing_offers">
					<div class="item-listing_offers_container">
						<div class="status-bar">
							<div class="g12">
								<label>Offers</label>
								<div class="count" id="total_offers"></div>
							</div>
							<div class="g12 right">
								<label>Originally:</label>
								<label id="lblretailprice"></label>
							</div>
						</div>

						<div class="offer-type-list">
							<div class="scrollable">
								<div class="offer-type-background">
									<div class="offer-type-background_swatch offer-type-new"></div>
									<div class="offer-type-background_swatch offer-type-used"></div>
									<div class="offer-type-background_swatch offer-type-fba"></div>
								</div>
								<table class="offer-type">
									<thead>
										<tr>
											<th class="offer-type-heading-new">New</th>
											<th class="offer-type-heading-used">Used</th>
											<th class="offer-type-heading-fba">FBA</th>
										</tr>
									</thead>
									<tbody id="offerListings"></tbody>
								</table>
							</div>
						</div>

						<div class="offer-pricing-box-container contain-detail-pricing-info">
							<div class="offer-buy-box-message">
								<div class="offer-type-owns-buy-box"></div>
								Offer owns the buy box
								<div class="offer-type-amazon-owns-buy-box"></div>
								Amazon is the merchant
							</div>
							<div class="offer-quotes">
								<div class="btn-grey" title="Bookscouter">
									<a id="lnkBookscouter" target="_blank"> <i class="icon-bookscouter"></i>
									</a>
								</div>
								<div class="btn-grey" title="Rakuten" style="display:none">
									<a id="lnkRakuten" target="_blank">
										<i class="icon-rakuten"></i>
									</a>
								</div>
								<div class="btn-grey" title="eBay">
									<a id="lnkeBay" target="_blank">
										<i class="icon-ebay"></i>
									</a>
								</div>
								<div class="btn-grey" title="Google">
									<a id="lnkGoogle" target="_blank">
										<i class="icon-google"></i>
									</a>
								</div>
								<div class="btn-grey" title="CamelCamelCamel">
									<a id="lnkCamel" target="_blank">
										<i class="icon-camel-camel"></i>
									</a>
								</div>
								<div class="btn-grey" title="Keepa">
									<a id="lnkKeepa" target="_blank">
										<i class="icon-keepa"></i>
									</a>
								</div>
								<div class="btn-grey" title="Prime Comparison">
									<a id="lnkPrime" target="_blank">
										<i class="icon-prime"></i>
									</a>
								</div>
							</div>
							<div class="offer-pricing-box">
								<div class="form-row offer-row-quantity" style="display:none">
									<div class="g12">
										<label>Quantity</label>
									</div>
									<div class="g12 right">
										<input type="text" class="qty" id="txtQuantity" value="1" />
									</div>
								</div>
								<div class="form-row">
									<div class="g12">
										<label>Price Per Unit</label>
									</div>
									<div class="g12 right">
										<div class="price">
											<input type="text" id="txtPricePerUnit" class="price">
											<label class="price-badge">$</label>
										</div>
									</div>
								</div>

								<div class="form-row">
									<div class="g12">
										<label>List Price</label>
									</div>
									<div class="g12 right">
										<div class="price">
											<input type="text" class="price" id="txtListPrice" />
											<label class="price-badge">$</label>
										</div>
									</div>
								</div>
								<div class="form-row">
									<div class="g12">
										<label>Net Profit (Per Unit):</label>
									</div>
									<div class="g12 right">
										<div class="price">
											<label class="price" id="txt-profit">0.00</label>
											<label class="price-badge">$</label>
										</div>
									</div>
								</div>
                                <div class="form-row">
									<div class="g12">
										<label>ROI:</label>
									</div>
									<div class="g12 right">
										<div class="price">
											<label class="price" id="txt-roi">N/A</label>
											<label class="price-badge"></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div id="templates"></div>

	</div>
</div>

<div id="modal_taxrate" class="modal">
	<div class="modal_window">
		<div class="modal_chrome form-validate-container">
			<span class="modal_title">Sales Tax</span>
			<div class="modal_content">
				<span class="g24 center">
					<span class="g6">
						<span class="form-validate-group">
							<div class="price">
								<input type="text" id="txtTaxRate" class="price">
								<label class="price-badge">%</label>
							</div>
							<div class="form-validate-prompt">
								<div class="form-validate-prompt_text">Invalid</div>
							</div>
						</span>
					</span>
				</span>
			</div>
			<div class="modal_control">
				<span class="btn-grey" id="btnCancelTaxRate">Cancel</span>
				<span class="btn-blue" id="btnOKTaxRate">OK</span>
			</div>
		</div>
	</div>
</div>

<div id="modal_shippingrate" class="modal">
	<div class="modal_window">
		<div class="modal_chrome form-validate-container">
			<span class="modal_title">Shipping Rate</span>
			<div class="modal_content">
				<span class="modal_text">
					Set your shipping rate per pound to calculate your shipping costs
				</span>
				<span class="g24 center">
					<span class="g6">
						<span class="form-validate-group">
							<div class="price">
								<input type="text" id="txtShippingRate" class="price form-validate">
								<label class="price-badge">$</label>
							</div>
							<div class="form-validate-prompt">
								<div class="form-validate-prompt_text">Invalid</div>
							</div>
						</span>
					</span>
					<label class="g2">/ lb</label>
				</span>
			</div>
			<div class="modal_control">
				<span class="btn-grey" id="btnCancelShippingRate">Cancel</span>
				<span class="btn-blue" id="btnOKShippingRate">OK</span>
			</div>
		</div>
	</div>
</div>

<div id="variationsModal" class="modal">
    <div class="modal_window">
      <div class="modal_chrome" style="width:700px">
        <div class="modal_title">
          <div class="modal_icon-alert"></div>
          Variations
        </div>
        <div class="modal_content">
          <div class="modal_text">Please select a child ASIN for the parent</div>
          <div class="table-container -module" style="border:1px solid #cbcbd3">
            <div class="table-header"></div>
            <div class="scrollable">
              <table style="border:medium none">
                <thead>
                  <tr>
                    <th style="width:30%">
                      <div class="th-inner">ASIN/Color/Size</div>
                    </th>
                    <th class="td_action">
                      <div class="th-inner"></div>
                    </th>
                  </tr>
                </thead>
                <tbody id="variationList"></tbody>
              </table>
            </div>
            <!-- .scrollable --> </div>
          <!-- .table-container --> </div>
        <div class="modal_control">
          <span id="variationModalClose" class="btn-grey">Close</span>
        </div>
      </div>
      <!-- .modal_chrome --> </div>
    <!-- .modal_window --> </div>



    
    
    <script language="javascript">
        var ua = navigator.userAgent.toLowerCase();
        var isChrome = ua.indexOf("chrome") > -1;
        var isWindows = (ua.indexOf("windows") != -1||ua.indexOf("win32") != -1);
        var script=document.createElement('script');
        script.type='text/javascript';
        script.src = (isChrome && isWindows) ? '/scripts/libs/DYMO.Label.Framework_2.0.js':'/scripts/libs/DYMO.Label.Framework.latest.js';
        document.body.appendChild(script);
    </script>
    <script type="text/javascript" src="/scripts/libs/master.min.js?de4b7561174e239a46450cfa458f1168"></script>
<script type="text/javascript" src="/scripts/libs/mustache.min.js?abfba09b07c0417a94809b1735291cb5"></script>
<script type="text/javascript" src="/scripts/libs/common.js?e01ed5840c851189f4901676efb139e9"></script>
<script type="text/javascript" src="/scripts/libs/config.js?f92a909344d6989103a43b4c0fcef6c9"></script>
<script type="text/javascript" src="/scripts/libs/global.js?c3f0a28ac09ffa1f186adbff1888d12d"></script>
<script type="text/javascript" src="/scripts/libs/underscore.js?2ac03544e5d1491b762aa890eda0924d"></script>
<script type="text/javascript" src="/scripts/libs/backbone.js?80005f38e38ce02017f1527c0e552dfd"></script>
<script type="text/javascript" src="/scripts/libs/jquery.simplePagination.js?e416de97e7e6560c569f105855c3e647"></script>
<script type="text/javascript" src="/scripts/libs/spin.js?50f4fac893875a4b28fe1a87b6e43564"></script>
<script type="text/javascript" src="/scripts/libs/jquery.spin.js?1f301eeb619f2d40139a866ab10966a6"></script>
<script type="text/javascript" src="/scripts/libs/moment.min.js?f03cdf247b508e859c66a7487e1cb4f2"></script>
<script type="text/javascript" src="/scripts/libs/accounting.min.js?0272e00805175809ef5cbc2734d636f5"></script>
<script type="text/javascript" src="/scripts/libs/jquery.fileDownload.js?9ab15532281ecba2076c2c5b2085eeaf"></script>
<script type="text/javascript" src="/scripts/libs/jquery.expander.min.js?6befd5f76d08c40f76e15363595bb5c1"></script>
<script type="text/javascript" src="/scripts/libs/jquery.numberic.js?0eac7589d2ee671f495b2aa51b03381c"></script>
<script type="text/javascript" src="/scripts/libs/jquery.history.js?9a3923ab2e2c5363812df2ee280e2735"></script>
<script type="text/javascript" src="/scripts/libs/jquery.postmessage-transport.min.js?48ec477fcf496c597a608ffd4c01376d"></script>
<script type="text/javascript" src="/scripts/libs/jquery.xdr-transport.min.js?734da4125e42f975c2526eaf27ecd118"></script>
<script type="text/javascript" src="/scripts/libs/jquery.fileupload.min.js?76f8692aae2d1389b8b91cdd22cc7c7f"></script>
<script type="text/javascript" src="/scripts/libs/jquery.iframe-transport.min.js?66385acf3cd5d1e1cca6214d5274bcad"></script>
<script type="text/javascript" src="/scripts/libs/animate.js?1e3efb4c95e77363021e7de26b27ea09"></script>
<script type="text/javascript" src="/scripts/libs/jquery.cookie.js?f8fd887f9a62ab61ef39ccd53750363b"></script>
<script type="text/javascript" src="/scripts/libs/he.js?36651043223ec56fcdd12a267c36f0a7"></script>
<script type="text/javascript" src="/scripts/libs/braintree.js?6e57c95dab380961ea73fd3f09d2718c"></script>

    <script src="/bundles/inventorylab_models?v=pGnAcIpYdV88i2Us0W5lYPzEEsE1SNhDBMsGMSi94501"></script>

    <script type="text/javascript" src="/scripts/main.js?7ed5200984db620d98d5744d43e78dea"></script>
<script type="text/javascript" src="/scripts/router.js?d689b6e12c15e0088654c8058e53af1b"></script>
<script type="text/javascript" src="/scripts/views/settings/printsetup_onboarding.js?da047221cd301693aac11cdbb51a0102"></script>
<script type="text/javascript" src="/Scripts/bootstraps/shared/userapplicationnotification.js?51023a2f336b1f499029fa6a763ee8f5"></script>
<script type="text/javascript" src="/Scripts/bootstraps/shared/legacysyncnotification.js?8754ed83e8688247230581fa97e7df72"></script>
<script type="text/javascript" src="/Scripts/views/shared/panelcontrol.js?1b9d9d73a9e600dab499f2fe32c13d32"></script>
<script type="text/javascript" src="/Scripts/views/shared/pagination.js?ddcc181fa354b0a021ccc058a8f13c0d"></script>
<script type="text/javascript" src="/Scripts/views/shared/searchdropdown.js?5654ff76a7f12c232579a5d3cf0a5b56"></script>

 
    <script type="text/x-mustache-template" id="searchDropdownTemplate">
      <div class="search_dropdown_container">
        <div class="input-icon">
          <input class="search_dropdown_input" id="search_dropdown_target_{{Type}}" name="{{Name}}" type="text" tabindex="0"/>
          <i class="icon-16-search"></i>
          <div class="btn-grey search_dropdown_add">Add</div>
        </div>
      </div>
      <div class="search_dropdown_content">
        <div class="scrollable">
          <div class="search_dropdown_item-container"></div>
        </div>
      </div>
    </script>
    <script type="text/x-mustache-template" id="searchDropdownItemTemplate">
      <div class="search_dropdown_item_container">
        <div class="search_dropdown_item_label">{{Name}}</div>
        <span class="search_dropdown_item_edit_input">
          <input type="text" value="{{Name}}" tabindex="-1">
        </span>
        <span class="search_dropdown_item_edit_error search_dropdown_item_edit_error_duplicate">Copy</span>
        <span class="search_dropdown_item_edit_error search_dropdown_item_edit_error_empty">Empty</span>
        {{#EditEnabled}}
        <span class="search_dropdown_item_control">
          <span class="search_dropdown_item_control_default">
            <span class="btn-grey search_dropdown_item_edit block">Edit</span>
          </span>
          <span class="search_dropdown_item_control_edit button-group">
            <span class="_no-text g12 btn-red search_dropdown_item_delete button-group--first">
              <i class="icon-16-close"></i>
            </span>
            <span class="_no-text g12 btn-green search_dropdown_item_save button-group--last" >
              <i class="icon-16-check"></i>
            </span>
          </span>
        </span>
        {{/EditEnabled}}
      </div>
    </script>
    <script type="text/x-mustache-template" id="searchDropdownEmptyTemplate">
      <div class="search_dropdown_item _has-text _empty">
        <div class="search_dropdown_item_container">
          <span class="search_dropdown_item_text">
               To add a {{TypeName}}, type a name into the text box and click 'add' or press <span class="badge-grey _no-icon">Enter</span> on your keyboard.
            <ul>
              <li>You can use the arrow keys on your Keyboard to navigate.</li>
              <li>Press <span class="badge-grey _no-icon">Enter</span> or click to select a {{TypeName}}</li>
            </ul>
          </span>
        </div>
      </div>
    </script>
    <script type="text/x-mustache-template" id="panelGraphItemsTemplate">
      <div class="panel-graph">
        {{#panelGraphItems}}
        <div id="{{ItemID}}" style="width: {{Percent}}%; display:{{Display}}" class="panel-graph-bar panel-graph-bar-{{ColorIndex}} {{First}} {{Last}}"></div>
        <div class="panel-graph-stat" id="{{ItemID}}_Stat">
            <div class="panel-graph-stat-head">{{Category}}</div>
            <div class="panel-graph-stat-value">
            ${{Value}} <span class="percentage">{{Percent}}%</span>
            </div>
        </div>
        {{/panelGraphItems}}
      </div>
      <div id="panelGraph"></div>
    </script>c  
    <script type="text/x-mustache-template" id="panelControlTemplate">
      <div class="panel-stats {{hasActionBar}}" data-dingo="panel-stats">
        <div class="panel-stats_container">
          <div class="panel-stats_totals">
            {{#panelStatsTotals}}
            <div class="{{GNumber}} panel-stats_totals_column">
              <div class="panel-stats_totals_column_content">
                <div class="panel-stats_totals_column_title">{{Title}}</div>
                <div class="panel-stats_totals_column_value {{IsRed}}">{{Value}}</div>
              </div>
            </div>
            {{/panelStatsTotals}}
          </div>
          <div class="panel-graph"></div>
          {{#submit}}
          <div class="panel-control-action" id="btnSPSubmit">
            <span class="btn-blue" id="spanSPSubmit">
              <i class="icon-micro-go"></i>
              Submit
            </span>
          </div>
          {{/submit}}
          {{#sendProducts}}
          <div class="panel-control-action">
            <a class="btn-blue" id="btnSendProducts" href="javascript:void(0)">
              <i class="icon-micro-go"></i>
              Send Products
            </a>
            <a class="btn-red" id="btnCompleteBatch" href="javascript:void(0)" style="display: none;">
              <i class="icon-micro-go"></i>
              Complete Batch
            </a>
          </div>
          {{/sendProducts}}
          {{#save}}
            <div class="panel-control-action">
              <a class="btn-red" id="btnDetailsCancel" href="javascript:void(0)">
                <i class="icon-micro-go"></i>
                Cancel
              </a>
              <a class="btn-blue _disabled" id="btnDetailsSave" href="javascript:void(0)">
                <i class="icon-micro-go"></i>
                Save
              </a>
            </div>
          {{/save}}
        </div>
      </div>
    </script>
      <script type="text/x-mustache-template" id="refundPanelControlTemplate">
      <div class="panel-stats {{hasActionBar}}" data-dingo="panel-stats">
        <div class="panel-stats_container">
          <div class="panel-stats_totals">
            {{#panelStatsTotals}}
            <div class="{{GNumber}} panel-stats_totals_column">
              <div class="panel-stats_totals_column_content">
                <div class="panel-stats_totals_column_title">{{Title}}</div>
                <div class="panel-stats_totals_column_value {{IsRed}}">{{Value}}</div>
              </div>
            </div>
            {{/panelStatsTotals}}
          </div>
          <div class="panel-graph"></div>   
        </div>
      </div>
    </script>
    <script type="text/x-mustache-template" id="panelGraphTemplate">
     <div class="panel-stats_graph">
        {{#panelItems}}
          <div class="panel-stats_graph_bar panel-stats_graph_bar--{{ColorIndex}} {{FirstBar}} {{BetweenBar}} {{LastBar}} {{OnlyOne}} {{CustomColor}}" style="width: {{Percentage}}%; max-width:100%; min-width: 0;" data-index="{{Index}}">
          </div>
        {{/panelItems}}
      </div>
      <div class="panel-stats_popup" style="display: none">
        <div class="panel-stats_popup_container">
          {{#panelItems}}
          <div class="panel-stats_popup_item panel-stats_popup_item--{{Index}}" data-index="{{Index}}">
            <div class="panel-stats_popup_item_title">{{Title}}</div>
            <div class="panel-stats_popup_item_value-title">{{ValueTitle}}</div>
            <div class="panel-stats_popup_item_value">{{#isMoney}}${{/isMoney}}{{Value}}</div>
            <div class="panel-stats_popup_item_percentage panel-stats_popup_item_percentage--{{Index}} {{LastPercent}} {{CustomColor}}">{{Percentage}}%</div>
          </div>
          {{/panelItems}}
        </div>
      </div>
    </script>
    <script type="text/x-mustache-template" id="csvUploadStepsTemplate">
    <div class="modal import_modal" id="uploadModalStep1">
      <div class="modal_window">
        <span class="modal_title"><span class="modal_icon-alert"></span>Import</span>
        <div class="form-group-container">
          <div class="modal_content">
            <h1>Select a CSV file to import</h1>
            <p><span id="uploadDescription"></span><span class="show-more" id="linkUploadMore">More</span></p>
            <p id="chooseFileError"></p>
            <div class="box">
              <div class="box_body">
                <div class="form-group form-group--validate form-group--invalid form-group--no-content">
                  <span class="form-row center uploader-container">
                    <span class="g15 scale-form">
                      <label id="fileUploaded">No file selected</label>
                      <span class="btn-blue">Select file from your computer</span>
                      <div style="overflow: hidden; width: 360px; height: 56px; position: absolute; left: 34px; top: 0px;">
                        <input type="file" id="csvFile" accept=".csv" name="files[]" style="opacity: 0; font-size: 266px; height: 226px;
                position: absolute; right: 0px; top: 0px;" tabindex="0" multiple="">
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal_control">
            <span id="cancelBtnStep1" class="btn-grey button-default" data-dingo="modal_cancel">Cancel</span>
            <span id="okBtnStep1" class="btn-blue button-default" data-dingo="modal_submit">Next</span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="uploadModalStep2">
      <div class="modal_window">
        <span class="modal_title"><span class="modal_icon-alert"></span>Import</span>
        <div class="form-group-container">
          <div class="modal_content">
            <h1>Select the corresponding columns from your CSV</h1>
            {{#items}}
            <div class="row-xsm">
              <div class="g16 col1of2-sm">
                <div id="uploadForm_{{name}}_{{index}}" class="form-group form-group--validate form-group--has-content" style="position: relative">
                  <div class="form-group_left">
                    <label class="form-group_label form-group_label--default" for="msku">
                    {{showName}}
                    </label>
                    <div class="form-group_help" rel="tip_{{name}}">More
                      <div id="tip_{{name}}" class="form-group_help_chrome" name="LiveModeHelp" style="font-size: 15px; line-height: 20px; color: #3c3c3c;">
                          In order to correctly import your data, we have listed all the columns in your CSV file. Please ensure that you select the column which corresponds to the {{showName}}
                      </div>
                    </div>
                  </div>
                  <div class="form-group_right">
                    <select class="form-group_input--select jsForCSVColumn" id="{{name}}_{{index}}" type="select" data-dingo="formGroup_validate select" tabindex="0" allowNull={{allowNull}}>
                    </select>
                    <div class="form-group_error">
                      <div class="form-group_error_chrome">
                        <div class="form-group_error_text">
                          Invalid {{showName}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {{/items}}
          </div>
          <div class="modal_control">          
                    <a id="hiddenUploadBtn" href="javascript:void(0)">upload</a>
            <span id="cancelBtnStep2" class="btn-grey button-default" data-dingo="modal_cancel">Cancel</span>
            <span id="okBtnStep2" class="btn-blue button-default" data-dingo="modal_submit">Next</span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="dimensionModal">
    <div class="modal_window" id="dimensionWin">
        <div class="modal_title">
        <div class="modal_icon-alert"></div>
        Package Dimensions
        </div>
        <div class="modal_content">
        <div class="modal_text">
            It may take up to one hour for the dimensions to register with Amazon.
        </div>
        <div class="center">
            <div class="g4 center col1of4-sm">
            <div class="form-validate-group">
                <label>Weight(LB)</label>
                <div class="input-label-unit">
                <input type="text" class="input_unit block" id="txtWeightLB"/>
                <label class="label_unit">lbs</label>
                </div>
                <div class="form-validate-prompt">
                <div class="arrow"></div>
                <div class="form-validate-prompt_text">Invalid</div>
                </div>
            </div>
            </div>
            <div class="g4 center col1of4-sm">
            <div class="form-validate-group">
                <label>Weight(OZ)</label>
                <div class="input-label-unit">
                <input type="text" class="input_unit block" id="txtWeightOZ">
                <label class="label_unit ounces_unit">ounces</label>
                </div>
                <div class="form-validate-prompt">
                <div class="arrow"></div>
                <div class="form-validate-prompt_text">Invalid</div>
                </div>
            </div>
            </div>
            <div class="g4 center col2of4-sm">
            <div class="form-validate-group">
                <label>Length</label>
                <div class="input-label-unit">
                <input type="text" class="input_unit block" id="txtLength"/>
                <label class="label_unit">in</label>
                </div>
                <div class="form-validate-prompt">
                <div class="arrow"></div>
                <div class="form-validate-prompt_text">Invalid</div>
                </div>
            </div>
            </div>
            <div class="g4 center col3of4-sm">
            <div class="form-validate-group">
                <label>Width</label>
                <div class="input-label-unit">
                <input type="text" class="input_unit block" id="txtWidth">
                <label class="label_unit">in</label>
                </div>
                <div class="form-validate-prompt">
                <div class="arrow"></div>
                <div class="form-validate-prompt_text">Invalid</div>
                </div>
            </div>
            </div>
            <div class="g4 center col4of4-sm">
            <div class="form-validate-group">
                <label>Height</label>
                <div class="input-label-unit">
                <input type="text" class="input_unit block" id="txtHeight">
                <label class="label_unit">in</label>
                </div>
                <div class="form-validate-prompt">
                <div class="arrow"></div>
                <div class="form-validate-prompt_text">Invalid</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="modal_control">
        <span class="btn-grey" id="btnCancelAddDimension">Close</span>
        <span class="btn-blue" id="btnAddDimension">OK</span>
        </div>
    <!-- .modal_chrome --> </div>
    <!-- .modal_window --> </div>
    <!-- modal for upload error -->
    <div class="modal import_modal" id="uploadErrorModal">
        <div class="modal_window">
        <span class="modal_title _error"><span class="modal_icon-error"></span>Import Error</span>
        <div class="form-group-container">
            <div class="modal_content">
            <p id="uploadErrorContent" class="scrollable" style="max-height:200px"></p>
            </div>
            <div class="modal_control">
            <span id="uploadErrorCloseBtn" class="btn-blue button-default" data-dingo="modal_submit">Close</span>
            </div>
        </div>
        </div>
    </div>
    <!-- modal for upload success -->
    <div class="modal import_modal" id="uploadSuccessModal">
        <div class="modal_window">
        <span class="modal_title _alert"><span class="modal_icon-alert"></span>Import Success</span>
        <div class="form-group-container">
            <div class="modal_content">
            <p id="uploadSuccessContent" class="scrollable" style="max-height:200px; text-align:center;"></p>
            </div>
            <div class="modal_control">
            <span id="uploadSuccessCloseBtn" class="btn-blue button-default" data-dingo="modal_submit">OK</span>
            </div>
        </div>
        </div>
    </div>
    </script>
    

<script type="text/javascript" src="/scripts/Views/scout/offerlisting.js?a5d10215b0f6ebbb1b9e133abc2b434b"></script>
<script type="text/javascript" src="/scripts/Views/scout/historylisting.js?9724e86afa56d0c86a29657144700ef3"></script>
<script type="text/javascript" src="/scripts/Views/scout/history.js?c4c837841e8e142c513a340cc28f0632"></script>
<script type="text/javascript" src="/scripts/Views/scout/scoutlisting.js?29332568e0a3821b1e317ec7296c3e46"></script>
<script type="text/javascript" src="/scripts/Views/scout/scout.js?c8a58c5d8ba3666ea28ccf8704112d5d"></script>
<script type="text/javascript" src="/scripts/Views/scout/variation.js?564e5b3335d89cf94eefdf5165f9e023"></script>
<script type="text/javascript" src="/scripts/bootstraps/scout/history.js?800fbfd5ea0e1b668f3c4c8589d33f43"></script>
<script type="text/javascript" src="/scripts/bootstraps/scout/scout.js?427bb52f54f7febfd2302810122920ff"></script>
<script type="text/javascript" src="/scripts/bootstraps/settings/printsetup.js?66189970e8d18f0a57a3595ef3e9e4c3"></script>

<script type="text/javascript">
$(function () {
scoutView = new InventoryLab.Scout.View.SCView;
Routes.push(scoutView);
});
</script>

     
    <script type="text/javascript">
        var unread = $('.navigation-indicator--unread');
        function blink() {
            if (unread.hasClass('navigation-indicator--unread')) {
                unread.removeClass('navigation-indicator--unread');
            } else {
                unread.addClass("navigation-indicator--unread");
            }
        };
        $(function () {
            if(unread.hasClass('navigation-indicator--unread')){
                setTimeout(function(){
                    unread.addClass('_blink_in');
                }, 5000);
            }
            setInterval("blink()", 1000);
        });
    </script>
</body>
</html>
