steps += 1;
if steps >= room_speed
{
steps = 0;
seconds += 1;
}

if(place_meeting(x+xspd,y,o_wall))
{
	xspd=0;
}
if(place_meeting(x,y+yspd,o_wall))
{
	yspd=0;
}

if(path_index=-1)
{
	if(y<600 && x<350)
	{
		a = irandom(3);
		switch(a)
			{
				case 3: with(other) path_start(p_from1_to2, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from1_to3, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from1_to4, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_first_build_2, 3,path_action_reverse,true); break;
			}
	}
	if(y<600 && x>350 && x<550)
	{
		a = irandom(3);
		switch(a)
			{
				case 3: with(other) path_start(p_from2_to1, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from2_to2, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from2_to3, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_from2_to4, 3,path_action_reverse,true); break;
			}
	}
	if(y<600 && x>550 && x<750)
	{
		a = irandom(3);
		switch(a)
			{
				case 3: with(other) path_start(p_from3_to1, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from3_to2, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from3_to3, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_from3_to4, 3,path_action_reverse,true); break;
			}
	}
	if(y<600 && x>800 && x<1000)
	{
		a = irandom(3);
		switch(a)
			{
				case 3: with(other) path_start(p_from4_to1, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from4_to2, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from4_to3, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_from4_to4, 3,path_action_reverse,true); break;
			}
	}
	if(y<600 && x>1000 && x<1200)
	{
		a = irandom(1);
		switch(a)
			{
				case 3: with(other) path_start(p_from5_to1, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from5_to2, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from5_to3, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_from5_to4, 3,path_action_reverse,true); break;
			}
	}
	if(y<600 && x>1200 && x<1500)
	{
		a = irandom(1);
		switch(a)
			{
				case 3: with(other) path_start(p_from6_to1, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from6_to2, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from6_to3, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_from6_to4, 3,path_action_reverse,true); break;
			}
	}
		if(y<600 && x>1500 && x<1700)
	{
		a = irandom(1);
		switch(a)
			{
				case 3: with(other) path_start(p_from7_to1, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from7_to2, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from7_to3, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_from7_to4, 3,path_action_reverse,true); break;
			}
	}
		if(y<600 && x>1700)
	{
		a = irandom(1);
		switch(a)
			{
				case 3: with(other) path_start(p_from8_to1, 3,path_action_reverse,true); break;
				case 2: with(other) path_start(p_from8_to2, 3,path_action_reverse,true); break;
				case 1: with(other) path_start(p_from8_to3, 3,path_action_reverse,true); break;
				case 0: with(other) path_start(p_from8_to4, 3,path_action_reverse,true); break;
			}
	}
	if(y>500 && x<350){
		b = irandom(8);
		switch(b)
			{
				case 0: with(other) path_start(p_from_f_build_to_home1, 3,path_action_stop,true); break;
				case 1: with(other) path_start(p_from1_to_home2, 3,path_action_stop,true); break;
				case 2: with(other) path_start(p_from1_to_home3, 3,path_action_stop,true); break;
				case 3: with(other) path_start(p_from1_to_home4, 3,path_action_stop,true); break;
				case 4: with(other) path_start(p_from1_to_home5, 3,path_action_stop,true); break;
				case 5: with(other) path_start(p_from1_to_home6, 3,path_action_stop,true); break;
				case 6: with(other) path_start(p_from1_to_home7, 3,path_action_stop,true); break;
				case 7: with(other) path_start(p_from1_to_home8, 3,path_action_stop,true); break;
			}
	}
}