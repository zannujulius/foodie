import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState, useContext } from "react";
import { style } from "./style";
import Wrapper from "../../components/Wrapper";
import SortPill from "../../components/Home/SortPill";
import { themes } from "../../constants/theme";
import { shadow } from "../../constants";
import EditorCard from "../../components/Home/EditorCard";
import CategoryCard from "../../components/Home/CategoryCard";
import OptionCard from "../../components/Home/OptionsCard";
import { flexRow, flexRowStart } from "../../constants/CustomStyle";
import SwitchButton from "../SwitchButton";
import { ThemeContext } from "../../context/ThemeContext";
import { getToken, setToken } from "../../utils/token";
import { EventRegister } from "react-native-event-listeners";

const Home = () => {
  const [sort, setsort] = useState("");
  const [mode, setMode] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      {/* Sort */}
      <View style={style.container}>
        <View style={style.topcontent}>
          <Text style={style.timeicon}>⛅</Text>
          <View>
            <Text style={style.greeting}>Good morning</Text>
            <Text style={style.greetingcaption}>
              What are you craving today
            </Text>
          </View>
        </View>
        <View style={style.tabcover}>
          <Text style={style.tabtitle}>Sort</Text>
          <Text style={style.sorticon}>🍲</Text>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={style.sortcover}
          showsHorizontalScrollIndicator={false}
        >
          {["Trending", "Newest", "Price", "Rating", "Nearest"].map(
            (i, index) => (
              <SortPill title={i} key={index} setsort={setsort} sort={sort} />
            )
          )}
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={style.editorcover}
        showsHorizontalScrollIndicator={false}
      >
        <View style={style.sectiontab}>
          <View style={style.tabcover}>
            <View>
              <Text style={style.tabtitle}>Editor's choice</Text>
              <Text style={style.tabcaption}>
                Checkout our suggestions for today.
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={style.morebtn}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(8)).map((i, index) => (
              <EditorCard key={index} />
            ))}
          </ScrollView>
        </View>

        <View style={style.sectiontab}>
          <View style={style.tabcover}>
            <View>
              <Text style={style.tabtitle}>Browser category</Text>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(8)).map((i, index) => (
              <CategoryCard key={index} />
            ))}
          </ScrollView>
        </View>
        <View style={style.sectiontab}>
          <View style={style.tabcover}>
            <View>
              <Text style={style.tabtitle}>Options</Text>
            </View>
            <TouchableOpacity>
              <Text style={style.morebtn}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          {Array.from(Array(8)).map((i, index) => (
            <OptionCard key={index} />
          ))}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Home;
