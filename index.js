function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
    if (num > max_num) {
    // (Fill in the missing line here)
    
        //num = max_num;
        max_num += 1;
        //max_num = num;
        //max_num += num;
        }
    }
    return max_num;
    }
    find_max(15 , 20);