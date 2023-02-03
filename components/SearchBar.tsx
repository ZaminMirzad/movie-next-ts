import { baseUrl, apiKey, imgBaseUrl } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

interface IResultProps {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  media_type: string;
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<IResultProps[]>([]);

  const handleSearch = () => {
    try {
      fetch(`${baseUrl}/search/multi?api_key=${apiKey}&query=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSearchResult(data.results?.slice(0, 10)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="p-2 h6 d-none d-md-block sticky-top bg-dark bg-opacity-25 blur-15 end-0">
      <div className="row g-3 w-50 px-3">
        <div className="d-flex align-items-center w-100 p-0 search-div">
          <input
            className="text-light fw-semibold fs-6 w-100 form-control border-0 rounded-0 rounded-start bg-secondary form-control-sm"
            type="text"
            id="search"
            placeholder="Search here..."
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            value={searchTerm}
          />
          <button className="btn btn-primary bg-primar rounded-end rounded-0 text-light search-span h-100 d-flex justify-content-center align-items-center px-1 py-0">
            {searchTerm.length === 0 ? (
              <FiSearch
                fontSize={28}
                onClick={handleSearch}
                className="search-icon-click"
              />
            ) : (
              <MdClose
                fontSize={28}
                onClick={() => setSearchTerm('')}
                className="search-icon-click"
              />
            )}
          </button>
        </div>
      </div>
      {searchResult?.length > 0 && (
        <div className="bg-dark bg-opacity-75  my- position-absolute top-100 overflow-y-scroll search-list rounded scroll-sm ">
          <div className="  text-capitalize d-flex flex-column gap-1 list-group bg-accen  overflow-y-auto rounded ">
            {searchResult?.map((item) => {
              return (
                <Link
                  href={`/${item.media_type}/${item.id}`}
                  key={item.id}
                  className=" d-flex justify-content-between align-items-center position-relative btn btn-secondary blur-15 rounded-1"
                >
                  {item.name || item.title}
                  <div className="w-25">
                    <Image
                      src={`${imgBaseUrl}/w200${item.backdrop_path}`}
                      alt={item.name || item.title}
                      height={36}
                      width={60}
                      className="position-absolute top-0 end-0 bottom-0 h-100 search-list-image"
                      quality={50}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
