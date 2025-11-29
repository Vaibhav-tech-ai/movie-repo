import { useQuery } from "@tanstack/react-query";
import { Button, Modal } from "antd";
import React from "react";
import { getTrailerKey } from "../../external/Api";
import { CloseOutlined } from "@ant-design/icons";

export const TrailerModal = ({ isOpen, onClose, dataId, dataType, title }) => {
  const { data, isFetching } = useQuery({
    queryKey: [`trailer-${dataId}`, dataId, dataType],
    queryFn: () => getTrailerKey(dataId, dataType),
  });

  const trailerKey = data?.results.find((res) => res.type === "Trailer")?.key;
  return (
    <Modal
      className="trailer-modal"
      open={isOpen}
      // centered
      closable={false}
      footer={null}
    >
      <div className="modal-top">
        <span className="modal-name">{title}</span>
        <Button className="close-button" onClick={onClose}>
          <CloseOutlined />
        </Button>
      </div>
      {isFetching ? (
        "Please Wait while we load the trailer"
      ) : (
        <iframe
          className="trailer-iframe"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Trailer"
          allowFullScreen
        ></iframe>
      )}
    </Modal>
  );
};
