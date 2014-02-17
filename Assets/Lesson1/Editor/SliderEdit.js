#pragma strict

@CustomEditor(Slider)
@CanEditMultipleObjects

class SliderEdit extends Editor{
	var _damage: SerializedProperty;
	var _atkRate: SerializedProperty;
	var _coins: SerializedProperty;
	var _isHiddenMsg: boolean = false;

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
		EditorGUILayout.HelpBox("T This is the damage the user takes This is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takeshis is the damage the user takes", MessageType.None, false);
		
		EditorGUILayout.IntSlider(_atkRate, 0, 70, new GUIContent("Attack Rate"));
		EditorGUILayout.HelpBox("Attack Rate will decrease over time", MessageType.Info, false);
		EditorGUILayout.IntSlider(_coins, 0, 70, new GUIContent("Coins"));
		EditorGUILayout.HelpBox("This value needs to be max 3 digits: Or else gui will break", MessageType.Warning, false);
		
		_isHiddenMsg = EditorGUILayout.Toggle("Show me hidden Message", _isHiddenMsg);
		
		EditorGUILayout.HelpBox("T This is the damage the user takes This is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takesThis is the damage the user takeshis is the damage the user takes", MessageType.Error, true);
		
		
		
		//update the values 
		serializedObject.ApplyModifiedProperties();
		
		
	}

} 