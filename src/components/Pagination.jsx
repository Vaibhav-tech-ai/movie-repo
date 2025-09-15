import { Pagination } from "antd";
import React from "react";

export const PaginationComp = ({ total, page, setPage }) => {
  return (
    <div className="pagination-wrapper">
      <Pagination
        className="pagination-dark"
        total={total}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        simple={{ readOnly: true }}
        onChange={(page) => setPage(page)}
        pageSize={20}
        current={page}
        showSizeChanger={false}
      />
    </div>
  );
};
