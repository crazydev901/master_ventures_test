import React, { useEffect, useMemo, useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import NomineeCard from "../NomineeCard";


import styles from "./HomeContent.module.css";

export type HomeContentProps = {};

const HomeContent: React.FC<HomeContentProps> = (props) => {
  const [groupList, setGroupList] = useState<Group[]>();
  const [selected, setSelected] = useState<Item[]>();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/ballots")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }

        throw {
          status: res.status,
          response: res,
        };
      })
      .then((data: ApiBallotsResponse) => {
        setGroupList(data.items);
      })
      .catch((error) => {
        setGroupList([]);
      });
  }, []);

  const selectedIds = useMemo(() => {
    return selected?.map((item) => item.id) ?? [];
  }, [selected]);

  const handleSelectCard = (nominee: Item) => {
    setSelected((prev) => {
      if (prev?.map((item) => item.id).includes(nominee.id)) return prev;

      return [...(prev ?? []), nominee];
    });
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <>
      <h1>AWARDS 2021</h1>
      {groupList?.map((group, index) => (
        <div className={styles.group} key={`group-${index}`}>
          <h2 className={styles["group-title"]}>{group.title}</h2>
          <div className={styles.grid}>
            {group.items.map((item) => (
              <NomineeCard
                key={item.id}
                nominee={item}
                selected={selectedIds.includes(item.id)}
                onSelect={handleSelectCard}
              />
            ))}
          </div>
        </div>
      ))}
      <div className={styles.footer}>
        <Button
          color="submit"
          size="large"
          onClick={(handleSubmit)}
          className={styles.submit}
        >
          Submit ballot button
        </Button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          Success
        </Modal>
      </div>
    </>
  );
};

export default HomeContent;
