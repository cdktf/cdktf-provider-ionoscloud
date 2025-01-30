# `dataIonoscloudObjectStorageAccesskey` Submodule <a name="`dataIonoscloudObjectStorageAccesskey` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudObjectStorageAccesskey <a name="DataIonoscloudObjectStorageAccesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/object_storage_accesskey ionoscloud_object_storage_accesskey}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudobjectstorageaccesskey"

dataionoscloudobjectstorageaccesskey.NewDataIonoscloudObjectStorageAccesskey(scope Construct, id *string, config DataIonoscloudObjectStorageAccesskeyConfig) DataIonoscloudObjectStorageAccesskey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig">DataIonoscloudObjectStorageAccesskeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig">DataIonoscloudObjectStorageAccesskeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetAccesskey">ResetAccesskey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccesskey` <a name="ResetAccesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetAccesskey"></a>

```go
func ResetAccesskey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudObjectStorageAccesskey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudobjectstorageaccesskey"

dataionoscloudobjectstorageaccesskey.DataIonoscloudObjectStorageAccesskey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudobjectstorageaccesskey"

dataionoscloudobjectstorageaccesskey.DataIonoscloudObjectStorageAccesskey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudobjectstorageaccesskey"

dataionoscloudobjectstorageaccesskey.DataIonoscloudObjectStorageAccesskey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudobjectstorageaccesskey"

dataionoscloudobjectstorageaccesskey.DataIonoscloudObjectStorageAccesskey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudObjectStorageAccesskey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudObjectStorageAccesskey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudObjectStorageAccesskey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/object_storage_accesskey#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudObjectStorageAccesskey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.canonicalUserId">CanonicalUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.contractUserId">ContractUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskeyInput">AccesskeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskey">Accesskey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CanonicalUserId`<sup>Required</sup> <a name="CanonicalUserId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.canonicalUserId"></a>

```go
func CanonicalUserId() *string
```

- *Type:* *string

---

##### `ContractUserId`<sup>Required</sup> <a name="ContractUserId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.contractUserId"></a>

```go
func ContractUserId() *string
```

- *Type:* *string

---

##### `AccesskeyInput`<sup>Optional</sup> <a name="AccesskeyInput" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskeyInput"></a>

```go
func AccesskeyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Accesskey`<sup>Required</sup> <a name="Accesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.accesskey"></a>

```go
func Accesskey() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudObjectStorageAccesskeyConfig <a name="DataIonoscloudObjectStorageAccesskeyConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudobjectstorageaccesskey"

&dataionoscloudobjectstorageaccesskey.DataIonoscloudObjectStorageAccesskeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Accesskey: *string,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.accesskey">Accesskey</a></code> | <code>*string</code> | Access key metadata is a string of 92 characters. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.description">Description</a></code> | <code>*string</code> | Description of the Access key. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.id">Id</a></code> | <code>*string</code> | The ID (UUID) of the AccessKey. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Accesskey`<sup>Optional</sup> <a name="Accesskey" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.accesskey"></a>

```go
Accesskey *string
```

- *Type:* *string

Access key metadata is a string of 92 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/object_storage_accesskey#accesskey DataIonoscloudObjectStorageAccesskey#accesskey}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/object_storage_accesskey#description DataIonoscloudObjectStorageAccesskey#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageAccesskey.DataIonoscloudObjectStorageAccesskeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID (UUID) of the AccessKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/object_storage_accesskey#id DataIonoscloudObjectStorageAccesskey#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



