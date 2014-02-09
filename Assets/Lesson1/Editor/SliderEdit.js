#pragma strict

@CustomEditor(Slider)
@CanEditMultipleObjects

class SliderEdit extends Editor{
	var _damage: SerializedProperty;
	var _atkRate: SerializedProperty;
	var _coins: SerializedProperty;


	function OnEnable(){
		_damage = serializedObject.FindProperty("damage");	
		_atkRate = serializedObject.FindProperty("atkRate");	
		_coins = serializedObject.FindProperty("coins");	
	}
	
	function OnInspectorGUI(){
		Debug.Log("Hit Gui");
		//get current values 
		serializedObject.Update();
		//show the values
		
		EditorGUILayout.IntSlider(_damage, 0, 70, new GUIContent("Damage"));
		EditorGUILayout.IntSlider(_atkRate, 0, 70, new GUIContent("Attack Rate"));
		EditorGUILayout.IntSlider(_coins, 0, 70, new GUIContent("Coins"));
		
		
		//update the values 
		serializedObject.ApplyModifiedProperties();
		
		
	}

} 