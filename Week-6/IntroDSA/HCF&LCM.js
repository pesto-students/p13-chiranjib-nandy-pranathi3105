function calculateHCF(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_HCF_BODY
    let hcf
    for (let i = 1; i <= a && i <= b; i++) {

        // check if is factor of both integers
        if( a % i == 0 && b % i == 0) {
            hcf= i;
        }
    }
    return hcf;
  }
  function calculateLCM(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_LCM_BODY
    let min = (a>b)?a:b;
    while(true)
    {
        if(min%a == 0 && min%b==0)
        {
            return min;
            break;
        }
        min++;
    }
  }

  var hcf = calculateHCF(6,8);
  var lcm = calculateLCM(6,8);
  console.log(hcf*lcm);