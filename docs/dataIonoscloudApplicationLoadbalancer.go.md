# `dataIonoscloudApplicationLoadbalancer` Submodule <a name="`dataIonoscloudApplicationLoadbalancer` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudApplicationLoadbalancer <a name="DataIonoscloudApplicationLoadbalancer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer"></a>

Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer ionoscloud_application_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5/dataionoscloudapplicationloadbalancer"

dataionoscloudapplicationloadbalancer.NewDataIonoscloudApplicationLoadbalancer(scope Construct, id *string, config DataIonoscloudApplicationLoadbalancerConfig) DataIonoscloudApplicationLoadbalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig">DataIonoscloudApplicationLoadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig">DataIonoscloudApplicationLoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetPartialMatch">ResetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.putTimeouts"></a>

```go
func PutTimeouts(value DataIonoscloudApplicationLoadbalancerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetName"></a>

```go
func ResetName()
```

##### `ResetPartialMatch` <a name="ResetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetPartialMatch"></a>

```go
func ResetPartialMatch()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5/dataionoscloudapplicationloadbalancer"

dataionoscloudapplicationloadbalancer.DataIonoscloudApplicationLoadbalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5/dataionoscloudapplicationloadbalancer"

dataionoscloudapplicationloadbalancer.DataIonoscloudApplicationLoadbalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5/dataionoscloudapplicationloadbalancer"

dataionoscloudapplicationloadbalancer.DataIonoscloudApplicationLoadbalancer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lbPrivateIps">LbPrivateIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.listenerLan">ListenerLan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.targetLan">TargetLan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatchInput">PartialMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatch">PartialMatch</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `LbPrivateIps`<sup>Required</sup> <a name="LbPrivateIps" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lbPrivateIps"></a>

```go
func LbPrivateIps() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerLan`<sup>Required</sup> <a name="ListenerLan" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.listenerLan"></a>

```go
func ListenerLan() *f64
```

- *Type:* *f64

---

##### `TargetLan`<sup>Required</sup> <a name="TargetLan" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.targetLan"></a>

```go
func TargetLan() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeouts"></a>

```go
func Timeouts() DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference</a>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartialMatchInput`<sup>Optional</sup> <a name="PartialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatchInput"></a>

```go
func PartialMatchInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartialMatch`<sup>Required</sup> <a name="PartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatch"></a>

```go
func PartialMatch() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudApplicationLoadbalancerConfig <a name="DataIonoscloudApplicationLoadbalancerConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5/dataionoscloudapplicationloadbalancer"

&dataionoscloudapplicationloadbalancer.DataIonoscloudApplicationLoadbalancerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatacenterId: *string,
	Id: *string,
	Name: *string,
	PartialMatch: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#datacenter_id DataIonoscloudApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#id DataIonoscloudApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.partialMatch">PartialMatch</a></code> | <code>interface{}</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#datacenter_id DataIonoscloudApplicationLoadbalancer#datacenter_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#id DataIonoscloudApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#name DataIonoscloudApplicationLoadbalancer#name}

---

##### `PartialMatch`<sup>Optional</sup> <a name="PartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.partialMatch"></a>

```go
PartialMatch interface{}
```

- *Type:* interface{}

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#partial_match DataIonoscloudApplicationLoadbalancer#partial_match}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.timeouts"></a>

```go
Timeouts DataIonoscloudApplicationLoadbalancerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#timeouts DataIonoscloudApplicationLoadbalancer#timeouts}

---

### DataIonoscloudApplicationLoadbalancerTimeouts <a name="DataIonoscloudApplicationLoadbalancerTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5/dataionoscloudapplicationloadbalancer"

&dataionoscloudapplicationloadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#create DataIonoscloudApplicationLoadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#default DataIonoscloudApplicationLoadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#delete DataIonoscloudApplicationLoadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#update DataIonoscloudApplicationLoadbalancer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#create DataIonoscloudApplicationLoadbalancer#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#default DataIonoscloudApplicationLoadbalancer#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#delete DataIonoscloudApplicationLoadbalancer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/application_loadbalancer#update DataIonoscloudApplicationLoadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference <a name="DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v5/dataionoscloudapplicationloadbalancer"

dataionoscloudapplicationloadbalancer.NewDataIonoscloudApplicationLoadbalancerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



