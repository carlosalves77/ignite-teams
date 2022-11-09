import React, { useState, useCallback } from "react";
import * as S from "./styles";

import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCArd } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      console.log("useFocusEffect");
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua Turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCArd title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length == 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
