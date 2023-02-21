# `targetGroup` Submodule <a name="`targetGroup` Submodule" id="@cdktf/provider-ionoscloud.targetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TargetGroup <a name="TargetGroup" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group ionoscloud_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  name: str,
  protocol: str,
  targets: typing.Union[IResolvable, typing.List[TargetGroupTargets]],
  health_check: TargetGroupHealthCheck = None,
  http_health_check: TargetGroupHttpHealthCheck = None,
  id: str = None,
  timeouts: TargetGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Balancing algorithm. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the target group. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Balancing protocol. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#id TargetGroup#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.algorithm"></a>

- *Type:* str

Balancing algorithm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#algorithm TargetGroup#algorithm}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the target group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#name TargetGroup#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.protocol"></a>

- *Type:* str

Balancing protocol.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#protocol TargetGroup#protocol}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.targets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#targets TargetGroup#targets}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#health_check TargetGroup#health_check}

---

##### `http_health_check`<sup>Optional</sup> <a name="http_health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.httpHealthCheck"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#http_health_check TargetGroup#http_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#id TargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#timeouts TargetGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck">put_http_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetHttpHealthCheck">reset_http_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHealthCheck"></a>

```python
def put_health_check(
  check_interval: typing.Union[int, float] = None,
  check_timeout: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None
) -> None
```

###### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHealthCheck.parameter.checkInterval"></a>

- *Type:* typing.Union[int, float]

The interval in milliseconds between consecutive health checks; default is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#check_interval TargetGroup#check_interval}

---

###### `check_timeout`<sup>Optional</sup> <a name="check_timeout" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHealthCheck.parameter.checkTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum time in milliseconds to wait for a target to respond to a check.

For target VMs with 'Check Interval' set, the lesser of the two  values is used once the TCP connection is established.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#check_timeout TargetGroup#check_timeout}

---

###### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHealthCheck.parameter.retries"></a>

- *Type:* typing.Union[int, float]

The maximum number of attempts to reconnect to a target after a connection failure.

Valid range is 0 to 65535, and default is three reconnection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#retries TargetGroup#retries}

---

##### `put_http_health_check` <a name="put_http_health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck"></a>

```python
def put_http_health_check(
  match_type: str,
  response: str,
  method: str = None,
  negate: typing.Union[bool, IResolvable] = None,
  path: str = None,
  regex: typing.Union[bool, IResolvable] = None
) -> None
```

###### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck.parameter.matchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#match_type TargetGroup#match_type}.

---

###### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck.parameter.response"></a>

- *Type:* str

The response returned by the request, depending on the match type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#response TargetGroup#response}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck.parameter.method"></a>

- *Type:* str

The method for the HTTP health check.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#method TargetGroup#method}

---

###### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck.parameter.negate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#negate TargetGroup#negate}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck.parameter.path"></a>

- *Type:* str

The path (destination URL) for the HTTP health check request; the default is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#path TargetGroup#path}

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putHttpHealthCheck.parameter.regex"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#regex TargetGroup#regex}.

---

##### `put_targets` <a name="put_targets" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTargets"></a>

```python
def put_targets(
  value: typing.Union[IResolvable, typing.List[TargetGroupTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#create TargetGroup#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#default TargetGroup#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#delete TargetGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#update TargetGroup#update}.

---

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_http_health_check` <a name="reset_http_health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetHttpHealthCheck"></a>

```python
def reset_http_health_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference">TargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference">TargetGroupHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList">TargetGroupTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference">TargetGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.httpHealthCheckInput">http_health_check_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.targetsInput">targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.healthCheck"></a>

```python
health_check: TargetGroupHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference">TargetGroupHealthCheckOutputReference</a>

---

##### `http_health_check`<sup>Required</sup> <a name="http_health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.httpHealthCheck"></a>

```python
http_health_check: TargetGroupHttpHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference">TargetGroupHttpHealthCheckOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.targets"></a>

```python
targets: TargetGroupTargetsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList">TargetGroupTargetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.timeouts"></a>

```python
timeouts: TargetGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference">TargetGroupTimeoutsOutputReference</a>

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.healthCheckInput"></a>

```python
health_check_input: TargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a>

---

##### `http_health_check_input`<sup>Optional</sup> <a name="http_health_check_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.httpHealthCheckInput"></a>

```python
http_health_check_input: TargetGroupHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.targetsInput"></a>

```python
targets_input: typing.Union[IResolvable, typing.List[TargetGroupTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[TargetGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a>, cdktf.IResolvable]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TargetGroupConfig <a name="TargetGroupConfig" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  algorithm: str,
  name: str,
  protocol: str,
  targets: typing.Union[IResolvable, typing.List[TargetGroupTargets]],
  health_check: TargetGroupHealthCheck = None,
  http_health_check: TargetGroupHttpHealthCheck = None,
  id: str = None,
  timeouts: TargetGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Balancing algorithm. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the target group. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.protocol">protocol</a></code> | <code>str</code> | Balancing protocol. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.httpHealthCheck">http_health_check</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#id TargetGroup#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Balancing algorithm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#algorithm TargetGroup#algorithm}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the target group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#name TargetGroup#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Balancing protocol.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#protocol TargetGroup#protocol}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.targets"></a>

```python
targets: typing.Union[IResolvable, typing.List[TargetGroupTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#targets TargetGroup#targets}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.healthCheck"></a>

```python
health_check: TargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#health_check TargetGroup#health_check}

---

##### `http_health_check`<sup>Optional</sup> <a name="http_health_check" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.httpHealthCheck"></a>

```python
http_health_check: TargetGroupHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#http_health_check TargetGroup#http_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#id TargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupConfig.property.timeouts"></a>

```python
timeouts: TargetGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#timeouts TargetGroup#timeouts}

---

### TargetGroupHealthCheck <a name="TargetGroupHealthCheck" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupHealthCheck(
  check_interval: typing.Union[int, float] = None,
  check_timeout: typing.Union[int, float] = None,
  retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck.property.checkInterval">check_interval</a></code> | <code>typing.Union[int, float]</code> | The interval in milliseconds between consecutive health checks; default is 2000. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck.property.checkTimeout">check_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time in milliseconds to wait for a target to respond to a check. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of attempts to reconnect to a target after a connection failure. |

---

##### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck.property.checkInterval"></a>

```python
check_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval in milliseconds between consecutive health checks; default is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#check_interval TargetGroup#check_interval}

---

##### `check_timeout`<sup>Optional</sup> <a name="check_timeout" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck.property.checkTimeout"></a>

```python
check_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time in milliseconds to wait for a target to respond to a check.

For target VMs with 'Check Interval' set, the lesser of the two  values is used once the TCP connection is established.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#check_timeout TargetGroup#check_timeout}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of attempts to reconnect to a target after a connection failure.

Valid range is 0 to 65535, and default is three reconnection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#retries TargetGroup#retries}

---

### TargetGroupHttpHealthCheck <a name="TargetGroupHttpHealthCheck" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupHttpHealthCheck(
  match_type: str,
  response: str,
  method: str = None,
  negate: typing.Union[bool, IResolvable] = None,
  path: str = None,
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.matchType">match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#match_type TargetGroup#match_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.response">response</a></code> | <code>str</code> | The response returned by the request, depending on the match type. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.method">method</a></code> | <code>str</code> | The method for the HTTP health check. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#negate TargetGroup#negate}. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.path">path</a></code> | <code>str</code> | The path (destination URL) for the HTTP health check request; the default is /. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#regex TargetGroup#regex}. |

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#match_type TargetGroup#match_type}.

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.response"></a>

```python
response: str
```

- *Type:* str

The response returned by the request, depending on the match type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#response TargetGroup#response}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.method"></a>

```python
method: str
```

- *Type:* str

The method for the HTTP health check.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#method TargetGroup#method}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#negate TargetGroup#negate}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.path"></a>

```python
path: str
```

- *Type:* str

The path (destination URL) for the HTTP health check request; the default is /.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#path TargetGroup#path}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#regex TargetGroup#regex}.

---

### TargetGroupTargets <a name="TargetGroupTargets" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupTargets(
  ip: str,
  port: typing.Union[int, float],
  weight: typing.Union[int, float],
  health_check_enabled: typing.Union[bool, IResolvable] = None,
  maintenance_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.ip">ip</a></code> | <code>str</code> | The IP of the balanced target VM. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port of the balanced target service; valid range is 1 to 65535. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Traffic is distributed in proportion to target weight, relative to the combined weight of all targets. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.healthCheckEnabled">health_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Makes the target available only if it accepts periodic health check TCP connection attempts; |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.maintenanceEnabled">maintenance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Maintenance mode prevents the target from receiving balanced traffic. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.ip"></a>

```python
ip: str
```

- *Type:* str

The IP of the balanced target VM.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#ip TargetGroup#ip}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port of the balanced target service; valid range is 1 to 65535.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#port TargetGroup#port}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Traffic is distributed in proportion to target weight, relative to the combined weight of all targets.

A target with higher weight receives a greater share of traffic. Valid range is 0 to 256 and default is 1; targets with weight of 0 do not participate in load balancing but still accept persistent connections. It is best use values in the middle of the range to leave room for later adjustments.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#weight TargetGroup#weight}

---

##### `health_check_enabled`<sup>Optional</sup> <a name="health_check_enabled" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.healthCheckEnabled"></a>

```python
health_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Makes the target available only if it accepts periodic health check TCP connection attempts;

when turned off, the target is considered always available. The health check only consists of a connection attempt to the address and port of the target. Default is True.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#health_check_enabled TargetGroup#health_check_enabled}

---

##### `maintenance_enabled`<sup>Optional</sup> <a name="maintenance_enabled" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets.property.maintenanceEnabled"></a>

```python
maintenance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Maintenance mode prevents the target from receiving balanced traffic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#maintenance_enabled TargetGroup#maintenance_enabled}

---

### TargetGroupTimeouts <a name="TargetGroupTimeouts" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#create TargetGroup#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#default TargetGroup#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#delete TargetGroup#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#update TargetGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#create TargetGroup#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#default TargetGroup#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#delete TargetGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/target_group#update TargetGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TargetGroupHealthCheckOutputReference <a name="TargetGroupHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resetCheckInterval">reset_check_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resetCheckTimeout">reset_check_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resetRetries">reset_retries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_interval` <a name="reset_check_interval" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resetCheckInterval"></a>

```python
def reset_check_interval() -> None
```

##### `reset_check_timeout` <a name="reset_check_timeout" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resetCheckTimeout"></a>

```python
def reset_check_timeout() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkIntervalInput">check_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkTimeoutInput">check_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkInterval">check_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkTimeout">check_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_interval_input`<sup>Optional</sup> <a name="check_interval_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkIntervalInput"></a>

```python
check_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_timeout_input`<sup>Optional</sup> <a name="check_timeout_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkTimeoutInput"></a>

```python
check_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_interval`<sup>Required</sup> <a name="check_interval" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkInterval"></a>

```python
check_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `check_timeout`<sup>Required</sup> <a name="check_timeout" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.checkTimeout"></a>

```python
check_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: TargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHealthCheck">TargetGroupHealthCheck</a>

---


### TargetGroupHttpHealthCheckOutputReference <a name="TargetGroupHttpHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupHttpHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.negateInput">negate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.negateInput"></a>

```python
negate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: TargetGroupHttpHealthCheck
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupHttpHealthCheck">TargetGroupHttpHealthCheck</a>

---


### TargetGroupTargetsList <a name="TargetGroupTargetsList" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TargetGroupTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TargetGroupTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>]]

---


### TargetGroupTargetsOutputReference <a name="TargetGroupTargetsOutputReference" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.resetHealthCheckEnabled">reset_health_check_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.resetMaintenanceEnabled">reset_maintenance_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_health_check_enabled` <a name="reset_health_check_enabled" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.resetHealthCheckEnabled"></a>

```python
def reset_health_check_enabled() -> None
```

##### `reset_maintenance_enabled` <a name="reset_maintenance_enabled" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.resetMaintenanceEnabled"></a>

```python
def reset_maintenance_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.healthCheckEnabledInput">health_check_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.maintenanceEnabledInput">maintenance_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.healthCheckEnabled">health_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.maintenanceEnabled">maintenance_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health_check_enabled_input`<sup>Optional</sup> <a name="health_check_enabled_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.healthCheckEnabledInput"></a>

```python
health_check_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `maintenance_enabled_input`<sup>Optional</sup> <a name="maintenance_enabled_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.maintenanceEnabledInput"></a>

```python
maintenance_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_enabled`<sup>Required</sup> <a name="health_check_enabled" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.healthCheckEnabled"></a>

```python
health_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `maintenance_enabled`<sup>Required</sup> <a name="maintenance_enabled" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.maintenanceEnabled"></a>

```python
maintenance_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[TargetGroupTargets, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTargets">TargetGroupTargets</a>, cdktf.IResolvable]

---


### TargetGroupTimeoutsOutputReference <a name="TargetGroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import target_group

targetGroup.TargetGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[TargetGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-ionoscloud.targetGroup.TargetGroupTimeouts">TargetGroupTimeouts</a>, cdktf.IResolvable]

---



