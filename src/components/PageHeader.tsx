import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

const PageHeader = ({ title, description, breadcrumbs, searchPlaceholder, onSearch }: PageHeaderProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    if (onSearch) {
      onSearch(query.trim());
    } else {
      navigate(`/knowledge?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="container">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light text-foreground mb-6">{title}</h1>
        {description && (
          <p className="text-[15px] font-light text-muted-foreground max-w-2xl leading-relaxed mb-8">
            {description}
          </p>
        )}
        {searchPlaceholder && (
          <div className="max-w-lg">
            <div className="flex items-center border-b border-foreground/20 pb-2">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-[15px] font-light py-2 outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={handleSearch} className="text-muted-foreground hover:text-foreground transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
