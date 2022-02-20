import { useCallback, useEffect, useMemo, useState } from "react";
import Client from "../core/client";

/**
 * Manage Templates
 * @returns {data, addTemplate, deleteTemplate}
 */
const useTemplateState = () => {
  const [data, setData] = useState([]);

  const client = useMemo(() => {
    return new Client();
  }, []);

  //========================================================================================
  /*                                                                                      *
   *                                       Lifecycle                                      *
   *                                                                                      */
  //========================================================================================

  useEffect(() => {
    setData(client.loadItems());
  }, [client]);

  //========================================================================================
  /*                                                                                      *
   *                                       Handlers                                       *
   *                                                                                      */
  //========================================================================================

  const getNextKey = useCallback(() => {
    const keys = data.map(item => item.key);

    return Math.max(...keys) + 1;
  }, [data]);

  const addTemplate = useCallback(
    data =>
      setData(prevState => {
        if (data.content && data.title) {
          return [...prevState, { ...data, key: getNextKey() }];
        }
        return prevState;
      }),
    [getNextKey]
  );

  const deleteTemplate = useCallback(
    key => setData(prevState => prevState.filter(item => item.key !== key)),
    []
  );

  return { data, addTemplate, deleteTemplate };
};

export default useTemplateState;
