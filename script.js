function firstNonRepeatedChar(a) {
	for(let i=0;i<a.lenth;i++)
		{
			let check=true;
			for(let j=0;j<a.length;j++)
				{
					if(i!=j&& a[j])
					{
						check=false;
						break;
					}
				}
		if(check==true)
		{
			return a[i]
		}

    }
  
  return null;
}

