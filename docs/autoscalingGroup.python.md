# `autoscalingGroup` Submodule <a name="`autoscalingGroup` Submodule" id="@cdktf/provider-ionoscloud.autoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroup <a name="AutoscalingGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group ionoscloud_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  location: str,
  max_replica_count: typing.Union[int, float],
  min_replica_count: typing.Union[int, float],
  name: str,
  policy: AutoscalingGroupPolicy,
  replica_configuration: AutoscalingGroupReplicaConfiguration,
  id: str = None,
  timeouts: AutoscalingGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Unique identifier for the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the data center. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | The maximum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | The minimum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | User-defined name for the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.policy">policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | policy block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.datacenterId"></a>

- *Type:* str

Unique identifier for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#datacenter_id AutoscalingGroup#datacenter_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.location"></a>

- *Type:* str

Location of the data center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#location AutoscalingGroup#location}

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.maxReplicaCount"></a>

- *Type:* typing.Union[int, float]

The maximum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#max_replica_count AutoscalingGroup#max_replica_count}

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.minReplicaCount"></a>

- *Type:* typing.Union[int, float]

The minimum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#min_replica_count AutoscalingGroup#min_replica_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.name"></a>

- *Type:* str

User-defined name for the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.policy"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#policy AutoscalingGroup#policy}

---

##### `replica_configuration`<sup>Required</sup> <a name="replica_configuration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.replicaConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#replica_configuration AutoscalingGroup#replica_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration">put_replica_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy"></a>

```python
def put_policy(
  metric: str,
  scale_in_action: AutoscalingGroupPolicyScaleInAction,
  scale_in_threshold: typing.Union[int, float],
  scale_out_action: AutoscalingGroupPolicyScaleOutAction,
  scale_out_threshold: typing.Union[int, float],
  unit: str,
  range: str = None
) -> None
```

###### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.metric"></a>

- *Type:* str

The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#metric AutoscalingGroup#metric}

---

###### `scale_in_action`<sup>Required</sup> <a name="scale_in_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.scaleInAction"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

scale_in_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_in_action AutoscalingGroup#scale_in_action}

---

###### `scale_in_threshold`<sup>Required</sup> <a name="scale_in_threshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.scaleInThreshold"></a>

- *Type:* typing.Union[int, float]

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scale_out_action' property. The value must have a lower minimum delta to the 'scale_in_threshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_in_threshold AutoscalingGroup#scale_in_threshold}

---

###### `scale_out_action`<sup>Required</sup> <a name="scale_out_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.scaleOutAction"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

scale_out_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_out_action AutoscalingGroup#scale_out_action}

---

###### `scale_out_threshold`<sup>Required</sup> <a name="scale_out_threshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.scaleOutThreshold"></a>

- *Type:* typing.Union[int, float]

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scaleOutAction' property. The value must have a lower minimum delta to the 'scaleInThreshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_out_threshold AutoscalingGroup#scale_out_threshold}

---

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.unit"></a>

- *Type:* str

Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#unit AutoscalingGroup#unit}

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.range"></a>

- *Type:* str

Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#range AutoscalingGroup#range}

---

##### `put_replica_configuration` <a name="put_replica_configuration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration"></a>

```python
def put_replica_configuration(
  availability_zone: str,
  cores: typing.Union[int, float],
  ram: typing.Union[int, float],
  cpu_family: str = None,
  nic: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationNic]] = None,
  volume: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationVolume]] = None
) -> None
```

###### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.availabilityZone"></a>

- *Type:* str

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#availability_zone AutoscalingGroup#availability_zone}

---

###### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.cores"></a>

- *Type:* typing.Union[int, float]

The total number of cores for the VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cores AutoscalingGroup#cores}

---

###### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.ram"></a>

- *Type:* typing.Union[int, float]

The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#ram AutoscalingGroup#ram}

---

###### `cpu_family`<sup>Optional</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.cpuFamily"></a>

- *Type:* str

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cpu_family AutoscalingGroup#cpu_family}

---

###### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.nic"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#nic AutoscalingGroup#nic}

---

###### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.volume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#volume AutoscalingGroup#volume}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#create AutoscalingGroup#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#default AutoscalingGroup#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#update AutoscalingGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroup.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutoscalingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutoscalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference">AutoscalingGroupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference">AutoscalingGroupReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCountInput">max_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCountInput">min_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policyInput">policy_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfigurationInput">replica_configuration_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policy"></a>

```python
policy: AutoscalingGroupPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference">AutoscalingGroupPolicyOutputReference</a>

---

##### `replica_configuration`<sup>Required</sup> <a name="replica_configuration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfiguration"></a>

```python
replica_configuration: AutoscalingGroupReplicaConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference">AutoscalingGroupReplicaConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeouts"></a>

```python
timeouts: AutoscalingGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a>

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_replica_count_input`<sup>Optional</sup> <a name="max_replica_count_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCountInput"></a>

```python
max_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count_input`<sup>Optional</sup> <a name="min_replica_count_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCountInput"></a>

```python
min_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policyInput"></a>

```python
policy_input: AutoscalingGroupPolicy
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---

##### `replica_configuration_input`<sup>Optional</sup> <a name="replica_configuration_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfigurationInput"></a>

```python
replica_configuration_input: AutoscalingGroupReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutoscalingGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupConfig <a name="AutoscalingGroupConfig" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  location: str,
  max_replica_count: typing.Union[int, float],
  min_replica_count: typing.Union[int, float],
  name: str,
  policy: AutoscalingGroupPolicy,
  replica_configuration: AutoscalingGroupReplicaConfiguration,
  id: str = None,
  timeouts: AutoscalingGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Unique identifier for the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.location">location</a></code> | <code>str</code> | Location of the data center. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | The maximum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | The minimum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.name">name</a></code> | <code>str</code> | User-defined name for the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | policy block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.replicaConfiguration">replica_configuration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Unique identifier for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#datacenter_id AutoscalingGroup#datacenter_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the data center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#location AutoscalingGroup#location}

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#max_replica_count AutoscalingGroup#max_replica_count}

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#min_replica_count AutoscalingGroup#min_replica_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User-defined name for the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.policy"></a>

```python
policy: AutoscalingGroupPolicy
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#policy AutoscalingGroup#policy}

---

##### `replica_configuration`<sup>Required</sup> <a name="replica_configuration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.replicaConfiguration"></a>

```python
replica_configuration: AutoscalingGroupReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#replica_configuration AutoscalingGroup#replica_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.timeouts"></a>

```python
timeouts: AutoscalingGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}

---

### AutoscalingGroupPolicy <a name="AutoscalingGroupPolicy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupPolicy(
  metric: str,
  scale_in_action: AutoscalingGroupPolicyScaleInAction,
  scale_in_threshold: typing.Union[int, float],
  scale_out_action: AutoscalingGroupPolicyScaleOutAction,
  scale_out_threshold: typing.Union[int, float],
  unit: str,
  range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.metric">metric</a></code> | <code>str</code> | The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInAction">scale_in_action</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | scale_in_action block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInThreshold">scale_in_threshold</a></code> | <code>typing.Union[int, float]</code> | The upper threshold for the value of the 'metric'. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutAction">scale_out_action</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | scale_out_action block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutThreshold">scale_out_threshold</a></code> | <code>typing.Union[int, float]</code> | The upper threshold for the value of the 'metric'. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.unit">unit</a></code> | <code>str</code> | Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.range">range</a></code> | <code>str</code> | Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes. |

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.metric"></a>

```python
metric: str
```

- *Type:* str

The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#metric AutoscalingGroup#metric}

---

##### `scale_in_action`<sup>Required</sup> <a name="scale_in_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInAction"></a>

```python
scale_in_action: AutoscalingGroupPolicyScaleInAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

scale_in_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_in_action AutoscalingGroup#scale_in_action}

---

##### `scale_in_threshold`<sup>Required</sup> <a name="scale_in_threshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInThreshold"></a>

```python
scale_in_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scale_out_action' property. The value must have a lower minimum delta to the 'scale_in_threshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_in_threshold AutoscalingGroup#scale_in_threshold}

---

##### `scale_out_action`<sup>Required</sup> <a name="scale_out_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutAction"></a>

```python
scale_out_action: AutoscalingGroupPolicyScaleOutAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

scale_out_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_out_action AutoscalingGroup#scale_out_action}

---

##### `scale_out_threshold`<sup>Required</sup> <a name="scale_out_threshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutThreshold"></a>

```python
scale_out_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scaleOutAction' property. The value must have a lower minimum delta to the 'scaleInThreshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#scale_out_threshold AutoscalingGroup#scale_out_threshold}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.unit"></a>

```python
unit: str
```

- *Type:* str

Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#unit AutoscalingGroup#unit}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.range"></a>

```python
range: str
```

- *Type:* str

Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#range AutoscalingGroup#range}

---

### AutoscalingGroupPolicyScaleInAction <a name="AutoscalingGroupPolicyScaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupPolicyScaleInAction(
  amount: typing.Union[int, float],
  amount_type: str,
  delete_volumes: typing.Union[bool, IResolvable],
  cooldown_period: str = None,
  termination_policy_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amountType">amount_type</a></code> | <code>str</code> | The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE]. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.deleteVolumes">delete_volumes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | The minimum time that elapses after the start of this scaling action until the following scaling action is started. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.terminationPolicyType">termination_policy_type</a></code> | <code>str</code> | The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always removed. Note that for 'SCALE_IN' operations, volumes are not deleted after the server is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

##### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amountType"></a>

```python
amount_type: str
```

- *Type:* str

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

##### `delete_volumes`<sup>Required</sup> <a name="delete_volumes" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.deleteVolumes"></a>

```python
delete_volumes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted.

When set to 'false', all volumes remain in the datacenter and must be deleted manually. Note that every scale-out creates new volumes. When they are not deleted, they will eventually use all of your contracts resource limits. At this point, scaling out would not be possible anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#delete_volumes AutoscalingGroup#delete_volumes}

---

##### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

##### `termination_policy_type`<sup>Optional</sup> <a name="termination_policy_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.terminationPolicyType"></a>

```python
termination_policy_type: str
```

- *Type:* str

The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas.

The default termination policy is 'OLDEST_SERVER_FIRST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#termination_policy_type AutoscalingGroup#termination_policy_type}

---

### AutoscalingGroupPolicyScaleOutAction <a name="AutoscalingGroupPolicyScaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupPolicyScaleOutAction(
  amount: typing.Union[int, float],
  amount_type: str,
  cooldown_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amountType">amount_type</a></code> | <code>str</code> | The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE]. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | The minimum time that elapses after the start of this scaling action until the following scaling action is started. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always added or removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

##### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amountType"></a>

```python
amount_type: str
```

- *Type:* str

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

##### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

### AutoscalingGroupReplicaConfiguration <a name="AutoscalingGroupReplicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfiguration(
  availability_zone: str,
  cores: typing.Union[int, float],
  ram: typing.Union[int, float],
  cpu_family: str = None,
  nic: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationNic]] = None,
  volume: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationVolume]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The zone where the VMs are created using this configuration. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | The total number of cores for the VMs. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cpuFamily">cpu_family</a></code> | <code>str</code> | The zone where the VMs are created using this configuration. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.nic">nic</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]</code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]</code> | volume block. |

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#availability_zone AutoscalingGroup#availability_zone}

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of cores for the VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cores AutoscalingGroup#cores}

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#ram AutoscalingGroup#ram}

---

##### `cpu_family`<sup>Optional</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cpu_family AutoscalingGroup#cpu_family}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.nic"></a>

```python
nic: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationNic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#nic AutoscalingGroup#nic}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#volume AutoscalingGroup#volume}

---

### AutoscalingGroupReplicaConfigurationNic <a name="AutoscalingGroupReplicaConfigurationNic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfigurationNic(
  lan: typing.Union[int, float],
  name: str,
  dhcp: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | Lan ID for this replica Nic. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.name">name</a></code> | <code>str</code> | Name for this replica NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Dhcp flag for this replica Nic. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lan ID for this replica Nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#lan AutoscalingGroup#lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.name"></a>

```python
name: str
```

- *Type:* str

Name for this replica NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Dhcp flag for this replica Nic.

This is an optional attribute with default value of 'true' if not given in the request payload or given as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#dhcp AutoscalingGroup#dhcp}

---

### AutoscalingGroupReplicaConfigurationVolume <a name="AutoscalingGroupReplicaConfigurationVolume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume(
  boot_order: str,
  name: str,
  size: typing.Union[int, float],
  type: str,
  backup_unit_id: str = None,
  bus: str = None,
  image: str = None,
  image_alias: str = None,
  image_password: str = None,
  ssh_keys: typing.List[str] = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bootOrder">boot_order</a></code> | <code>str</code> | Determines whether the volume will be used as a boot volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.name">name</a></code> | <code>str</code> | Name for this replica volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | User-defined size for this replica volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.type">type</a></code> | <code>str</code> | Storage Type for this replica volume. Possible values: SSD, HDD, SSD_STANDARD or SSD_PREMIUM. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bus">bus</a></code> | <code>str</code> | The bus type of the volume. Default setting is 'VIRTIO'. The bus type 'IDE' is also supported. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.image">image</a></code> | <code>str</code> | The image installed on the disk. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imageAlias">image_alias</a></code> | <code>str</code> | The image installed on the volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imagePassword">image_password</a></code> | <code>str</code> | Image password for this replica volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#ssh_keys AutoscalingGroup#ssh_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.userData">user_data</a></code> | <code>str</code> | User-data (Cloud Init) for this replica volume. |

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bootOrder"></a>

```python
boot_order: str
```

- *Type:* str

Determines whether the volume will be used as a boot volume.

Set to NONE, the volume will not be used as boot volume.
Set to PRIMARY, the volume will be used as boot volume and set to AUTO will delegate the decision to the provisioning engine to decide whether to use the volume as boot volume.
Notice that exactly one volume can be set to PRIMARY or all of them set to AUTO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#boot_order AutoscalingGroup#boot_order}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.name"></a>

```python
name: str
```

- *Type:* str

Name for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

User-defined size for this replica volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#size AutoscalingGroup#size}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.type"></a>

```python
type: str
```

- *Type:* str

Storage Type for this replica volume. Possible values: SSD, HDD, SSD_STANDARD or SSD_PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#type AutoscalingGroup#type}

---

##### `backup_unit_id`<sup>Optional</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#backup_unit_id AutoscalingGroup#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bus"></a>

```python
bus: str
```

- *Type:* str

The bus type of the volume. Default setting is 'VIRTIO'. The bus type 'IDE' is also supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#bus AutoscalingGroup#bus}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.image"></a>

```python
image: str
```

- *Type:* str

The image installed on the disk.

Currently, only the UUID of the image is supported. Note that either 'image' or 'imageAlias' must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#image AutoscalingGroup#image}

---

##### `image_alias`<sup>Optional</sup> <a name="image_alias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imageAlias"></a>

```python
image_alias: str
```

- *Type:* str

The image installed on the volume.

Must be an 'imageAlias' as specified via the images API. Note that one of 'image' or 'imageAlias' must be set, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#image_alias AutoscalingGroup#image_alias}

---

##### `image_password`<sup>Optional</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

Image password for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#image_password AutoscalingGroup#image_password}

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#ssh_keys AutoscalingGroup#ssh_keys}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.userData"></a>

```python
user_data: str
```

- *Type:* str

User-data (Cloud Init) for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#user_data AutoscalingGroup#user_data}

---

### AutoscalingGroupTimeouts <a name="AutoscalingGroupTimeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#create AutoscalingGroup#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#default AutoscalingGroup#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#update AutoscalingGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#create AutoscalingGroup#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#default AutoscalingGroup#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#update AutoscalingGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupPolicyOutputReference <a name="AutoscalingGroupPolicyOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction">put_scale_in_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction">put_scale_out_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resetRange">reset_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scale_in_action` <a name="put_scale_in_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction"></a>

```python
def put_scale_in_action(
  amount: typing.Union[int, float],
  amount_type: str,
  delete_volumes: typing.Union[bool, IResolvable],
  cooldown_period: str = None,
  termination_policy_type: str = None
) -> None
```

###### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction.parameter.amount"></a>

- *Type:* typing.Union[int, float]

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always removed. Note that for 'SCALE_IN' operations, volumes are not deleted after the server is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

###### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction.parameter.amountType"></a>

- *Type:* str

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

###### `delete_volumes`<sup>Required</sup> <a name="delete_volumes" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction.parameter.deleteVolumes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted.

When set to 'false', all volumes remain in the datacenter and must be deleted manually. Note that every scale-out creates new volumes. When they are not deleted, they will eventually use all of your contracts resource limits. At this point, scaling out would not be possible anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#delete_volumes AutoscalingGroup#delete_volumes}

---

###### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction.parameter.cooldownPeriod"></a>

- *Type:* str

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

###### `termination_policy_type`<sup>Optional</sup> <a name="termination_policy_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction.parameter.terminationPolicyType"></a>

- *Type:* str

The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas.

The default termination policy is 'OLDEST_SERVER_FIRST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#termination_policy_type AutoscalingGroup#termination_policy_type}

---

##### `put_scale_out_action` <a name="put_scale_out_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction"></a>

```python
def put_scale_out_action(
  amount: typing.Union[int, float],
  amount_type: str,
  cooldown_period: str = None
) -> None
```

###### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction.parameter.amount"></a>

- *Type:* typing.Union[int, float]

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always added or removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

###### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction.parameter.amountType"></a>

- *Type:* str

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

###### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction.parameter.cooldownPeriod"></a>

- *Type:* str

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

##### `reset_range` <a name="reset_range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resetRange"></a>

```python
def reset_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInAction">scale_in_action</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference">AutoscalingGroupPolicyScaleInActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutAction">scale_out_action</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference">AutoscalingGroupPolicyScaleOutActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInActionInput">scale_in_action_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThresholdInput">scale_in_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutActionInput">scale_out_action_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThresholdInput">scale_out_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThreshold">scale_in_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThreshold">scale_out_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_action`<sup>Required</sup> <a name="scale_in_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInAction"></a>

```python
scale_in_action: AutoscalingGroupPolicyScaleInActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference">AutoscalingGroupPolicyScaleInActionOutputReference</a>

---

##### `scale_out_action`<sup>Required</sup> <a name="scale_out_action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutAction"></a>

```python
scale_out_action: AutoscalingGroupPolicyScaleOutActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference">AutoscalingGroupPolicyScaleOutActionOutputReference</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `scale_in_action_input`<sup>Optional</sup> <a name="scale_in_action_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInActionInput"></a>

```python
scale_in_action_input: AutoscalingGroupPolicyScaleInAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---

##### `scale_in_threshold_input`<sup>Optional</sup> <a name="scale_in_threshold_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThresholdInput"></a>

```python
scale_in_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_action_input`<sup>Optional</sup> <a name="scale_out_action_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutActionInput"></a>

```python
scale_out_action_input: AutoscalingGroupPolicyScaleOutAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---

##### `scale_out_threshold_input`<sup>Optional</sup> <a name="scale_out_threshold_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThresholdInput"></a>

```python
scale_out_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `scale_in_threshold`<sup>Required</sup> <a name="scale_in_threshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThreshold"></a>

```python
scale_in_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_threshold`<sup>Required</sup> <a name="scale_out_threshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThreshold"></a>

```python
scale_out_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingGroupPolicy
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---


### AutoscalingGroupPolicyScaleInActionOutputReference <a name="AutoscalingGroupPolicyScaleInActionOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetCooldownPeriod">reset_cooldown_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetTerminationPolicyType">reset_termination_policy_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooldown_period` <a name="reset_cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetCooldownPeriod"></a>

```python
def reset_cooldown_period() -> None
```

##### `reset_termination_policy_type` <a name="reset_termination_policy_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetTerminationPolicyType"></a>

```python
def reset_termination_policy_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountTypeInput">amount_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriodInput">cooldown_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumesInput">delete_volumes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyTypeInput">termination_policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountType">amount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes">delete_volumes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType">termination_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount_type_input`<sup>Optional</sup> <a name="amount_type_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountTypeInput"></a>

```python
amount_type_input: str
```

- *Type:* str

---

##### `cooldown_period_input`<sup>Optional</sup> <a name="cooldown_period_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriodInput"></a>

```python
cooldown_period_input: str
```

- *Type:* str

---

##### `delete_volumes_input`<sup>Optional</sup> <a name="delete_volumes_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumesInput"></a>

```python
delete_volumes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `termination_policy_type_input`<sup>Optional</sup> <a name="termination_policy_type_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyTypeInput"></a>

```python
termination_policy_type_input: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountType"></a>

```python
amount_type: str
```

- *Type:* str

---

##### `cooldown_period`<sup>Required</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

---

##### `delete_volumes`<sup>Required</sup> <a name="delete_volumes" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes"></a>

```python
delete_volumes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `termination_policy_type`<sup>Required</sup> <a name="termination_policy_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType"></a>

```python
termination_policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingGroupPolicyScaleInAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---


### AutoscalingGroupPolicyScaleOutActionOutputReference <a name="AutoscalingGroupPolicyScaleOutActionOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resetCooldownPeriod">reset_cooldown_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cooldown_period` <a name="reset_cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resetCooldownPeriod"></a>

```python
def reset_cooldown_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountTypeInput">amount_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriodInput">cooldown_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType">amount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount_type_input`<sup>Optional</sup> <a name="amount_type_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountTypeInput"></a>

```python
amount_type_input: str
```

- *Type:* str

---

##### `cooldown_period_input`<sup>Optional</sup> <a name="cooldown_period_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriodInput"></a>

```python
cooldown_period_input: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `amount_type`<sup>Required</sup> <a name="amount_type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType"></a>

```python
amount_type: str
```

- *Type:* str

---

##### `cooldown_period`<sup>Required</sup> <a name="cooldown_period" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingGroupPolicyScaleOutAction
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---


### AutoscalingGroupReplicaConfigurationNicList <a name="AutoscalingGroupReplicaConfigurationNicList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AutoscalingGroupReplicaConfigurationNicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationNic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]

---


### AutoscalingGroupReplicaConfigurationNicOutputReference <a name="AutoscalingGroupReplicaConfigurationNicOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetDhcp">reset_dhcp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dhcp` <a name="reset_dhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetDhcp"></a>

```python
def reset_dhcp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcpInput">dhcp_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lanInput">lan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp">dhcp</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lan">lan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dhcp_input`<sup>Optional</sup> <a name="dhcp_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcpInput"></a>

```python
dhcp_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lan_input`<sup>Optional</sup> <a name="lan_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lanInput"></a>

```python
lan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp"></a>

```python
dhcp: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lan"></a>

```python
lan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutoscalingGroupReplicaConfigurationNic]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]

---


### AutoscalingGroupReplicaConfigurationOutputReference <a name="AutoscalingGroupReplicaConfigurationOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic">put_nic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetCpuFamily">reset_cpu_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetNic">reset_nic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nic` <a name="put_nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic"></a>

```python
def put_nic(
  value: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationNic]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]

---

##### `reset_cpu_family` <a name="reset_cpu_family" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetCpuFamily"></a>

```python
def reset_cpu_family() -> None
```

##### `reset_nic` <a name="reset_nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetNic"></a>

```python
def reset_nic() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetVolume"></a>

```python
def reset_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList">AutoscalingGroupReplicaConfigurationNicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList">AutoscalingGroupReplicaConfigurationVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.coresInput">cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamilyInput">cpu_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nicInput">nic_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily">cpu_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nic"></a>

```python
nic: AutoscalingGroupReplicaConfigurationNicList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList">AutoscalingGroupReplicaConfigurationNicList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volume"></a>

```python
volume: AutoscalingGroupReplicaConfigurationVolumeList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList">AutoscalingGroupReplicaConfigurationVolumeList</a>

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `cores_input`<sup>Optional</sup> <a name="cores_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.coresInput"></a>

```python
cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family_input`<sup>Optional</sup> <a name="cpu_family_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamilyInput"></a>

```python
cpu_family_input: str
```

- *Type:* str

---

##### `nic_input`<sup>Optional</sup> <a name="nic_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nicInput"></a>

```python
nic_input: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationNic]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>]]

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_family`<sup>Required</sup> <a name="cpu_family" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily"></a>

```python
cpu_family: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AutoscalingGroupReplicaConfiguration
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---


### AutoscalingGroupReplicaConfigurationVolumeList <a name="AutoscalingGroupReplicaConfigurationVolumeList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AutoscalingGroupReplicaConfigurationVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AutoscalingGroupReplicaConfigurationVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]]

---


### AutoscalingGroupReplicaConfigurationVolumeOutputReference <a name="AutoscalingGroupReplicaConfigurationVolumeOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBackupUnitId">reset_backup_unit_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBus">reset_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImageAlias">reset_image_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImagePassword">reset_image_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_unit_id` <a name="reset_backup_unit_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBackupUnitId"></a>

```python
def reset_backup_unit_id() -> None
```

##### `reset_bus` <a name="reset_bus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBus"></a>

```python
def reset_bus() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_image_alias` <a name="reset_image_alias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImageAlias"></a>

```python
def reset_image_alias() -> None
```

##### `reset_image_password` <a name="reset_image_password" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImagePassword"></a>

```python
def reset_image_password() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetUserData"></a>

```python
def reset_user_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitIdInput">backup_unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrderInput">boot_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.busInput">bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAliasInput">image_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePasswordInput">image_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId">backup_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder">boot_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus">bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias">image_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePassword">image_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_unit_id_input`<sup>Optional</sup> <a name="backup_unit_id_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitIdInput"></a>

```python
backup_unit_id_input: str
```

- *Type:* str

---

##### `boot_order_input`<sup>Optional</sup> <a name="boot_order_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrderInput"></a>

```python
boot_order_input: str
```

- *Type:* str

---

##### `bus_input`<sup>Optional</sup> <a name="bus_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.busInput"></a>

```python
bus_input: str
```

- *Type:* str

---

##### `image_alias_input`<sup>Optional</sup> <a name="image_alias_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAliasInput"></a>

```python
image_alias_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image_password_input`<sup>Optional</sup> <a name="image_password_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePasswordInput"></a>

```python
image_password_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `backup_unit_id`<sup>Required</sup> <a name="backup_unit_id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId"></a>

```python
backup_unit_id: str
```

- *Type:* str

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder"></a>

```python
boot_order: str
```

- *Type:* str

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus"></a>

```python
bus: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_alias`<sup>Required</sup> <a name="image_alias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias"></a>

```python
image_alias: str
```

- *Type:* str

---

##### `image_password`<sup>Required</sup> <a name="image_password" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePassword"></a>

```python
image_password: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutoscalingGroupReplicaConfigurationVolume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>]

---


### AutoscalingGroupTimeoutsOutputReference <a name="AutoscalingGroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import autoscaling_group

autoscalingGroup.AutoscalingGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutoscalingGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>]

---



