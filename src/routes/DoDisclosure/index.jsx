import React, {useState, useEffect} from "react";
import DomesticFilter from "@components/Disclosure/DisclosureFilter/DomesticFilter"
import DomesticList from "@components/Disclosure/DisclosureList/DomesticList"
import Pagination from "@components/Disclosure/Pagination";
import axios from "redaxios";

const DoDisclosure = () => {
  const [disclosureList, setDisclosureList] = useState(null); // 공시 리스트
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [urlParams, setUrlParams] = useState({
    crtfc_key: '40529f7f2d13f0da1ede1202e7cac575cf0419be',
    corp_code: '00126380',
    bgn_de: '20210316',
    end_de: '20220316',
    last_reprt_at: 'N',
    pblntf_ty: '',
    pblntf_detail_ty: 'A001',
    corp_cls: '',
    sort: 'date',
    sort_mth: 'desc',
    page_no: '1',
    page_count: '15'
  })

  const offset = (page - 1) * limit;

  let paramString = ``
  for(let i = 0; i < urlParams.pblntf_detail_ty.length; i ++) {
    paramString += `&pblntf_detail_ty${urlParams.pblntf_detail_ty[i]}`
  }
  
  const openDartUrl = (paramString) => {
    return `https://opendart.fss.or.kr/api/list.json?`
    + `crtfc_key=${urlParams.crtfc_key}`
    + `&corp_code=${urlParams.corp_code}`
    + `&bgn_de=${urlParams.bgn_de}`
    + `&end_de=${urlParams.end_de}`
    + `&last_reprt_at=${urlParams.last_reprt_at}`
    + `${urlParams.pblntf_ty && `&pblntf_ty=${urlParams.pblntf_ty}`}`
    + `${urlParams.pblntf_detail_ty && paramString}`
    + `${urlParams.corp_cls && `&corp_cls=${urlParams.corp_cls}`}`
    + `&sort=${urlParams.sort}`
    + `&sort_mth=${urlParams.sort_mth}`
    + `&page_no=${urlParams.page_no}`
    + `&page_count=${urlParams.page_count}`
  }

  // console.log(openDartUrl(paramString))

  useEffect(() => {
    let isApiSubscribed = true;
    const disclosureFetch = async () => {
      const res = await axios.get(
        "https://gyoheonlee.github.io/mobile-bank/data/005930/disclosure.json",
      );
      if (isApiSubscribed) {
        setTimeout(() => {
          setDisclosureList(res.data);
        }, 0);
      }
    };
    disclosureFetch();
    return () => (isApiSubscribed = false);
  }, [])

  return (
    <div className="disclosure">
      <DomesticFilter 
        setDisclosureList={setDisclosureList} 
        disclosureList={disclosureList} 
        setUrlParams={setUrlParams} 
        urlParams={urlParams} 
      />
      {!disclosureList ? (
        <div>로딩중</div>
      ) : (
        <>
          <DomesticList 
            data={disclosureList} 
            offset={offset} 
            limit={limit}
            page={page}
          />
          <Pagination
            total={disclosureList.list.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default DoDisclosure;
