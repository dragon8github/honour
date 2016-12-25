;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-lock" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M823.13728 923.907072 217.186304 923.907072c-21.830656 0-39.519232-17.687552-39.519232-39.519232L177.667072 541.892608c0-21.810176 17.687552-39.498752 39.519232-39.498752l65.864704 0L283.051008 317.97248c0-130.944 106.155008-237.11232 237.109248-237.11232 130.957312 0 237.113344 106.16832 237.113344 237.11232l0 184.421376 65.86368 0c21.830656 0 39.519232 17.687552 39.519232 39.498752l0 342.496256C862.656512 906.21952 844.96896 923.907072 823.13728 923.907072M480.647168 728.525824l0 76.824576c0 21.829632 17.693696 39.519232 39.513088 39.519232 21.830656 0 39.519232-17.688576 39.519232-39.519232l0-76.824576c23.528448-13.70112 39.519232-38.900736 39.519232-68.076544 0-43.649024-35.377152-79.038464-79.038464-79.038464-43.65824 0-79.035392 35.38944-79.035392 79.038464C441.125888 689.625088 457.116672 714.825728 480.647168 728.525824M678.235136 317.97248c0-87.296-70.777856-158.07488-158.07488-158.07488-87.307264 0-158.071808 70.77888-158.071808 158.07488l0 184.421376 316.146688 0L678.235136 317.97248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.232 28.48256C245.11744 28.48256 29.44 244.16 29.44 510.27456c0 266.11584 215.67744 481.792 481.792 481.792 266.11328 0 481.792-215.67616 481.792-481.792C993.02528 244.16 777.34656 28.48256 511.232 28.48256zM511.232 953.52448c-244.3968 0-443.24992-198.85312-443.24992-443.24992S266.8352 67.02592 511.232 67.02592c244.39424 0 443.24736 198.85312 443.24736 443.24864S755.62624 953.52448 511.232 953.52448z"  ></path>' +
    '' +
    '<path d="M226.14016 491.00288l572.74368 0 0 38.54592-572.74368 0 0-38.54592Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.919856 517.891174c114.010192 0 206.432854-92.438319 206.432854-206.443839 0-113.984031-92.421639-206.401884-206.432854-206.401884-114.009168 0-206.430808 92.417853-206.430808 206.401884C304.489048 425.452855 396.910688 517.891174 510.919856 517.891174zM549.161352 621.12435l-79.988983 0c-114.010192 0-405.533419 92.417853-405.533419 206.42235s92.421639 98.046037 206.430808 98.046037l481.70122 0c114.009168 0 206.430808 15.959483 206.430808-98.046037S663.171544 621.12435 549.161352 621.12435z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoshifang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M592.628155 564.890465l-59.446002 35.405097 0-117.834431c0-13.040256-10.571011-23.606545-23.606545-23.606545s-23.606545 10.56629-23.606545 23.606545l0 159.372509c0 8.493635 4.560785 16.326287 11.940191 20.52353 3.621244 2.058491 7.643799 3.083015 11.666355 3.083015 4.18308 0 8.361438-1.109508 12.08183-3.323802l95.134377-56.66043c11.203666-6.67121 14.872124-21.156186 8.200914-32.359852C618.321519 561.897155 603.831822 558.214534 592.628155 564.890465z"  ></path>' +
    '' +
    '<path d="M969.21393 436.574727c-0.571278-0.627934-1.180327-1.222819-1.812983-1.779934l-87.599168-77.155633c0.004721-0.160525 0.047213-0.306885 0.047213-0.46741L879.848992 151.464316c0-60.706592-49.389614-110.100927-110.100927-110.100927s-110.100927 49.394335-110.100927 110.100927l0 12.26124-129.255278-113.849647c-8.838291-7.785439-22.062677-7.865701-30.995394-0.17941l-447.438459 384.918885c-0.712918 0.61377-1.388065 1.270032-2.02072 1.959343-11.435011 12.497305-17.733237 28.979395-17.733237 46.396304 0 36.769555 28.266477 66.68849 63.015312 66.68849l21.552776 0 0 381.83587c0 13.040256 10.571011 23.606545 23.606545 23.606545l744.012209 0c13.035534 0 23.606545-10.56629 23.606545-23.606545l0-381.83587 15.934418 0c34.748835 0 63.020033-29.918935 63.020033-66.68849C986.947167 465.549401 980.64894 449.072032 969.21393 436.574727zM706.860228 151.464316c0-34.678015 28.209822-62.887837 62.887837-62.887837s62.887837 28.214543 62.887837 62.887837L832.635901 316.091641l-125.775673-110.780796L706.860228 151.464316zM923.931855 502.446431l-28.99828 0c-1.817704 0-3.56931 0.250229-5.268981 0.637377-1.699671-0.387147-3.451277-0.637377-5.268981-0.637377-13.035534 0-23.606545 10.56629-23.606545 23.606545l0 381.83587L163.980506 907.888846l0-381.83587c0-13.040256-10.571011-23.606545-23.606545-23.606545l-45.159321 0c-8.564455 0-15.802221-8.918553-15.802221-19.4754 0-5.183997 1.633573-9.99029 4.61744-13.672911l430.578665-370.415023 420.442014 370.33004c3.03108 3.692064 4.68826 8.536127 4.68826 13.757895C939.734076 493.527878 932.496309 502.446431 923.931855 502.446431z"  ></path>' +
    '' +
    '<path d="M514.292196 357.450309c-130.166491 0-236.065453 105.898962-236.065453 236.065453s105.898962 236.065453 236.065453 236.065453 236.065453-105.898962 236.065453-236.065453S644.463408 357.450309 514.292196 357.450309zM514.292196 787.089433c-106.734634 0-193.573671-86.839037-193.573671-193.573671s86.839037-193.573671 193.573671-193.573671 193.573671 86.839037 193.573671 193.573671S621.031551 787.089433 514.292196 787.089433z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icontianjia01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.833431 62.695924c-247.644193 0-448.406636 200.762443-448.406636 448.406636 0 247.65545 200.762443 448.416869 448.406636 448.416869 247.65545 0 448.416869-200.76142 448.416869-448.416869C959.2503 263.458367 758.488881 62.695924 510.833431 62.695924zM779.544429 562.112328 560.358381 562.112328l0 219.186048-102.008278 0L458.350103 562.112328 239.164055 562.112328l0-102.008278 219.186048 0L458.350103 240.918002l102.008278 0 0 219.186048 219.186048 0L779.544429 562.112328z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuding" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M506.092965 145.585773c-187.853435 0-340.138794 152.285359-340.138794 340.137771 0 187.853435 152.284335 340.138794 340.138794 340.138794 187.852412 0 340.137771-152.284335 340.137771-340.138794C846.230736 297.871131 693.9464 145.585773 506.092965 145.585773zM676.082544 536.397666 506.091942 536.397666c-12.224416 0-22.134113-9.908674-22.134113-22.13309 0-0.004093 0-0.008186 0-0.01228L483.957829 305.314661c0-12.224416 9.909697-22.134113 22.134113-22.134113 12.224416 0 22.13309 9.909697 22.13309 22.134113l0 186.81478 147.855466 0c12.225439 0 22.134113 9.910721 22.134113 22.135136C698.215634 526.488992 688.307983 536.397666 676.082544 536.397666z"  ></path>' +
    '' +
    '<path d="M318.644759 130.204457c-21.202904-34.266431-58.160631-58.051137-101.440343-60.684104-70.770833-4.305049-131.63197 49.576115-135.935995 120.346949-2.857071 46.967708 19.918655 89.562828 56.246025 114.165156C171.454442 223.550449 237.445412 160.630421 318.644759 130.204457z"  ></path>' +
    '' +
    '<path d="M877.659539 304.034505c34.266431-21.203928 58.051137-58.161654 60.684104-101.441367 4.305049-70.76981-49.576115-131.63197-120.346949-135.935995-46.967708-2.857071-89.562828 19.918655-114.165156 56.245002C784.313547 156.842141 847.233576 222.834134 877.659539 304.034505z"  ></path>' +
    '' +
    '<path d="M245.757728 790.488689l-25.720801 40.215934c-24.532743 38.359656-13.32447 89.346911 25.035186 113.879654 38.360679 24.532743 89.346911 13.32447 113.880677-25.036209l27.177989-42.493813C333.43972 857.866239 285.811979 828.157613 245.757728 790.488689z"  ></path>' +
    '' +
    '<path d="M773.783727 790.488689l25.721825 40.215934c24.532743 38.359656 13.32447 89.346911-25.035186 113.879654-38.361703 24.532743-89.347934 13.32447-113.880677-25.036209l-27.177989-42.493813C686.102758 857.866239 733.729475 828.157613 773.783727 790.488689z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiesuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M803.028283 310.064848l9.209756-27.629267c6.856152-20.568455 5.218862-42.569538-4.502547-61.910025s-26.4013-33.769105-46.969755-40.625256l-322.750775-107.037828c-20.670785-6.856152-42.671868-5.321192-61.910025 4.502547-19.340487 9.721409-33.769105 26.4013-40.625256 46.969755-1.125637 3.37691-1.432629 6.753821-1.227967 10.028401l-3.172249-0.716314c-21.080108-5.116531-42.87653-1.739621-61.398372 9.414417-18.521842 11.256368-31.620162 29.061896-36.736693 50.039673l-30.392194 124.229372c-36.020378 18.21485-60.784388 55.565527-60.784388 98.544387l0 426.207032c0 60.784388 49.425689 110.312408 110.312408 110.312408l519.839549 0c60.784388 0 110.312408-49.52802 110.312408-110.312408l0-426.207032C882.232183 365.835036 848.77007 323.57249 803.028283 310.064848zM384.700709 140.605342c2.455935-7.470135 7.674796-13.405311 14.633279-16.986883 7.060813-3.479241 15.042601-3.990894 22.308075-1.534959l322.750775 107.037828c7.367805 2.455935 13.405311 7.674796 16.986883 14.633279 3.479241 6.958482 4.093225 14.94027 1.534959 22.308075l-13.098319 39.499619-27.629267 0c2.967588-18.828834-0.716314-37.96466-10.847046-54.54222-11.256368-18.521842-28.959565-31.620162-50.039673-36.736693l-279.157931-68.254523C383.16575 144.391575 384.086725 142.549623 384.700709 140.605342zM283.393395 205.380624c1.841951-7.572466 6.54916-14.019295 13.302981-18.11252 6.65149-3.990894 14.633279-5.218862 22.103414-3.37691l330.22091 80.84119c7.572466 1.841951 14.019295 6.54916 18.11252 13.302981 4.093225 6.65149 5.218862 14.530948 3.37691 22.103414-0.409322 1.841951-0.716314 3.683902-0.716314 5.525853l-410.959769 0L283.393395 205.380624zM830.350558 842.184071c0 32.234145-26.196639 58.430784-58.430784 58.430784l-519.839549 0c-32.234145 0-58.430784-26.196639-58.430784-58.430784l0-426.309362c0-32.234145 26.196639-58.430784 58.430784-58.430784l519.839549 0c32.234145 0 58.430784 26.196639 58.430784 58.430784L830.350558 842.184071z"  ></path>' +
    '' +
    '<path d="M579.74287 496.204246l-55.053873 106.935498c-5.321192 10.437723-9.619078 19.033495-12.688997 25.889647-3.069919-7.060813-6.856152-15.042601-11.768021-24.047696l-58.123792-108.777449-47.993061 0 79.920214 147.151431-64.46829 0 0 38.373982 81.557504 0 0 22.001083-81.557504 0 0 36.429701 81.557504 0 0 67.231217 43.183522 0 0-67.231217 81.148182 0 0-36.429701-81.148182 0 0-22.001083 81.148182 0 0-38.373982-64.570621 0 79.613222-147.151431L579.74287 496.204246 579.74287 496.204246z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M939.072 434.496C919.744 403.392 886.272 384 851.904 382.976L638.848 381.952c14.208-41.024 21.376-83.776 21.376-127.04 0-21.504-1.856-43.52-5.952-67.264l-3.968-17.152C638.976 121.344 595.84 86.912 545.28 86.912c-59.456 0-107.84 48.384-107.84 107.904 0 3.456 0.128 6.848 0.448 9.664C434.944 310.016 307.904 418.944 264.704 418.944c0 0 0 0-0.064 0L106.368 419.008c-20.672 0-37.504 16.896-37.504 37.568l-0.384 442.88c0 20.992 18.176 36.288 40.96 36.928l137.216-0.256 5.248 0.96 4.608-0.64 522.24 0.192c18.368-1.28 36.096-6.976 51.456-16.768 16.64-10.688 30.08-25.728 36.16-38.976l6.4-10.624c35.968-85.632 79.872-347.968 81.664-359.04l0.704-10.624C956.928 477.056 951.36 454.208 939.072 434.496zM132.864 483.328 218.24 483.2l0 389.312-85.696 0.256L132.864 483.328zM815.744 841.6l-4.032 6.4c-3.648 7.36-9.216 13.568-16 17.92-6.208 3.968-13.568 6.336-19.136 6.72L282.24 872.448 282.24 479.808C366.656 463.36 498.24 334.336 501.824 201.344L501.44 194.816c0-24.192 19.648-43.904 43.84-43.904 20.544 0 38.08 13.952 42.688 33.984l3.584 15.232c3.136 18.368 4.672 36.736 4.672 54.656 0 36.352-6.08 72.256-18.112 106.624L548.672 445.824l291.456 0.064 6.912 0.704c15.488 0.576 29.568 8.704 37.696 21.76 5.056 8.128 7.36 17.6 6.592 32.384C890.88 503.296 846.848 766.656 815.744 841.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-paidui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M961.610044 591.170131l0 240.284575c0 17.317411-14.049994 31.368428-31.368428 31.368428L636.164904 862.823134c-17.317411 0-31.368428-14.049994-31.368428-31.368428 0-17.317411 14.049994-31.368428 31.368428-31.368428l41.61991 0L677.784814 591.170131c0-70.211085-44.601824-134.499273-110.972441-159.985738-10.987239-4.206812-18.666128-14.213723-19.931958-25.853831-1.306762-11.68104 4.043083-23.11751 13.846356-29.611411 27.978215-18.461467 44.642756-49.421596 44.642756-82.749656 0-54.771441-44.560892-99.332333-99.332333-99.332333s-99.332333 44.560892-99.332333 99.332333c0 33.329083 16.664541 64.288189 44.642756 82.749656 9.80225 6.493901 15.153118 17.930371 13.846356 29.611411-1.26583 11.640108-8.944719 21.647019-19.931958 25.853831-66.412572 25.486464-111.013373 89.774653-111.013373 159.985738l0 208.91717 133.314285 0c17.318434 0 31.368428 14.049994 31.368428 31.368428 0 17.317411-14.049994 31.368428-31.368428 31.368428l-373.803521 0c-17.317411 0-31.368428-14.049994-31.368428-31.368428L62.390979 591.170131c0-79.849606 42.028209-154.022932 108.23612-196.704011-22.87294-28.386514-35.778878-64.002686-35.778878-101.497649 0-89.366354 72.701812-162.069189 162.069189-162.069189 17.317411 0 31.368428 14.049994 31.368428 31.368428s-14.049994 31.368428-31.368428 31.368428c-54.771441 0-99.332333 44.560892-99.332333 99.332333 0 33.329083 16.664541 64.288189 44.642756 82.749656 9.80225 6.493901 15.153118 17.930371 13.846356 29.611411-1.26583 11.640108-8.944719 21.647019-19.931958 25.853831-66.412572 25.486464-111.013373 89.774653-111.013373 159.985738l0 208.91717 146.384975 0L271.513834 591.170131c0-79.849606 42.028209-154.022932 108.23612-196.704011-22.87294-28.386514-35.778878-64.002686-35.778878-101.497649 0-89.366354 72.701812-162.069189 162.069189-162.069189s162.069189 72.701812 162.069189 162.069189c0 37.494962-12.906961 73.111135-35.778878 101.497649 66.166979 42.682102 108.195188 116.854405 108.195188 196.704011l0 208.91717 158.351518 0L898.877281 591.170131c0-70.211085-44.601824-134.499273-111.013373-159.985738-10.987239-4.206812-18.666128-14.213723-19.931958-25.853831-1.306762-11.68104 4.043083-23.11751 13.846356-29.611411 27.978215-18.461467 44.642756-49.421596 44.642756-82.749656 0-54.771441-44.560892-99.332333-99.332333-99.332333-17.317411 0-31.368428-14.049994-31.368428-31.368428s14.049994-31.368428 31.368428-31.368428c89.366354 0 162.069189 72.701812 162.069189 162.069189 0 37.494962-12.906961 73.111135-35.778878 101.497649C919.581836 437.147198 961.610044 511.320525 961.610044 591.170131zM517.677303 529.536398l-32.67519 0 0-32.67519c0-17.317411-14.049994-31.368428-31.368428-31.368428-17.317411 0-31.368428 14.049994-31.368428 31.368428l0 32.67519-32.716122 0c-17.317411 0-31.368428 14.049994-31.368428 31.368428s14.049994 31.368428 31.368428 31.368428l32.716122 0 0 32.716122c0 17.317411 14.049994 31.368428 31.368428 31.368428 17.317411 0 31.368428-14.049994 31.368428-31.368428l0-32.716122 32.67519 0c17.317411 0 31.368428-14.049994 31.368428-31.368428S534.994714 529.536398 517.677303 529.536398z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-diancan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M897.943003 144.417157l-10.298554-13.113669-16.296151 3.558036c-2.676969 0.587378-33.365922 7.810896-68.787666 24.235984-43.771923-53.911864-113.033379-83.929528-117.03246-85.597517l-15.387455-6.40078-12.477172 11.060917c-2.309602 2.046612-31.499411 28.804023-56.781214 67.376527-33.772174-9.637498-68.815295-15.775288-104.986099-15.775288-166.271908 0-315.143517 108.72833-367.68108 265.432325l-18.670222 0c-16.986883 0-31.869848 11.357675-36.275181 27.757181-0.881067 3.182482-80.139202 309.932842 202.574718 458.804451l0 37.548174c0 20.756743 16.84055 37.597293 37.597293 37.597293l383.903553 0c20.756743 0 37.597293-16.84055 37.597293-37.597293L734.942605 881.755322c147.815557-77.694523 197.284225-197.388603 210.233142-297.335942 2.343371-4.901637 3.894703-10.227945 3.894703-16.023952 0-2.606361-0.982374-4.895497-1.486864-7.355525 0.345877-4.426823 0.731664-8.888438 0.948605-13.205766l0.538259-25.554002c0-0.48914-0.098237-5.189186-0.098237-5.630231-0.979304-54.339606-11.014868-92.084255-11.455913-93.650937-1.832741-6.823406-5.779633-12.467963-10.638291-17.10047 10.785647-15.812127 20.046568-33.399691 26.949792-52.598962C987.420897 259.904425 901.602346 149.09162 897.943003 144.417157zM680.672584 129.904629c22.063505 11.293207 52.66343 31.227212 75.154677 56.193837-9.349949 6.700609-18.073634 14.319124-26.282596 22.617114-23.77345-17.923208-49.982368-32.224935-77.287247-44.38386C661.902078 150.913105 672.02053 138.922003 680.672584 129.904629zM495.89623 204.955952c125.482923 0 238.440577 76.892251 287.278889 190.237739l-27.252691 0c-47.629787-100.510158-148.124596-165.172877-260.026198-165.172877-111.607914 0-212.521255 64.702628-260.173554 165.172877l-27.071565 0C257.480212 281.866622 370.444007 204.955952 495.89623 204.955952zM669.226904 395.193691 322.626955 395.193691c39.485293-55.517431 103.443977-89.979314 173.269275-89.979314C565.907771 305.2154 629.78152 339.67319 669.226904 395.193691zM873.674273 530.798135 460.306664 530.798135c-20.756743 0-37.597293 16.84055-37.597293 37.597293 0 20.756743 16.84055 37.597293 37.597293 37.597293l404.433122 0c-17.415648 77.250408-65.140603 163.129334-183.304839 218.386846-13.218046 6.217608-21.686928 19.48375-21.686928 34.073026l0 23.25361L351.039052 881.706203l0-23.25361c0-14.588253-8.468882-27.855418-21.686928-34.073026-118.782314-55.54506-166.593226-141.818983-183.950546-218.386846l164.515914 0c20.756743 0 37.597293-16.84055 37.597293-37.597293 0-20.756743-16.84055-37.597293-37.597293-37.597293L136.654356 530.798135c-0.284479-24.103978 1.588171-45.077661 3.830235-60.409858l729.572294 0c1.762133 13.07069 3.476171 30.204929 3.818979 50.325176L873.674273 530.798135zM903.784034 335.303672c-8.453533 23.5166-21.485337 43.765783-36.437887 59.890019l-3.739161 0c-19.431561-57.93448-51.635007-109.377106-93.552699-151.062508 27.472702-26.533306 68.37732-44.454468 96.037287-52.877301C888.228757 224.675062 920.560116 288.63784 903.784034 335.303672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)